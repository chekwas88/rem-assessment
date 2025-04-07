import React, { useState } from "react";
import SkipCard from "./components/card/SkipCard";
import Button from "./components/button/Button";
import useDataLoad from "./hooks/useDataloadable";
import Loader from "./components/loader/Loader";
import Modal from "./components/modal/Modal";
import Success from "./components/success/Success";
import ErrorPage from "./components/error/ErrorPage";

const App: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [isOpen, setOpen] = useState(false)

  const {isError, refetch, toggleRefetch, isLoading, payload} = useDataLoad(import.meta.env.VITE_API_URL)

  if(isLoading){
    return(
      <div className="container">
        <div className="container-header">
          <h1>🌿 Choose Your Eco-Friendly Skip Size</h1>
          <p>Select the skip that fits your needs and helps protect the planet.</p>
        </div>
        <div className="container-loader">
          <Loader />
        </div>
       
      </div>
    )
  }

  if(isError){
    return(
      <div className="container">
        <div className="container-header">
          <h1>🌿 Choose Your Eco-Friendly Skip Size</h1>
          <p>Select the skip that fits your needs and helps protect the planet.</p>
        </div>
        <ErrorPage retry={() => refetch(!toggleRefetch)}/>
       
      </div>
    )
  }


  const getFeatures = (size:number):string[] => {
    const features = size <= 8 ? [ "🌱 80%+ recyclable waste capacity", "🌍 Best for smaller carbon footprint", "⏳ 14-day hire"]
      : size >= 14 ? [ "🪵 Great for wood, metal, plastics", "🍃 Efficient for medium-sized loads", "⏳ 14-day hire"]
      : ["🔄 Handles mixed materials sustainably", "🌳 Offset with 2 trees planted per skip", "⏳ 14-day hire"]
    return features
  }

  return (
    <div className="container">
      <div className="container-header">
        <h1>🌿 Choose Your Eco-Friendly Skip Size</h1>
        <p>Select the skip that fits your needs and helps protect the planet.</p>
      </div>

      
      <div className="card-grid">
        {payload.map((p) => {
          const skip = {
            title: `${p.size} Yard Eco-Skip`,
            totalPrice: p.vat + p.price,
            features: getFeatures(p.size)

            
          }

          return(
          <SkipCard
            key={p.id}
            title={skip.title}
            features={skip.features}
            price={skip.totalPrice}
            isSelected={selectedSize === skip.title}
            onSelect={() => setSelectedSize(skip.title)}
          />
        )})}
      </div>
      {selectedSize ? (<div className="container-bottom">
        <Button label="Continue" onClick={() => setOpen(true)} />
      </div>): null}
      <Modal isOpen={isOpen}>
        <Success
          closeModal={() => {
            setOpen(false)
            setSelectedSize("")
          }}
          skip={selectedSize}
        />
      </Modal>
    </div>
  );
};

export default App;
