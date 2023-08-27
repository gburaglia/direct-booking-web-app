import React, {useContext} from "react";
import Property from "./Property";
import { PropertyContext } from "../context";
import Loading from "./Loading";

export default function PropertiesList() {
  const context = useContext(PropertyContext);
  const { loading, properties } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
        <section className="roomslist">
        <div className="roomslist-center">
            {
                properties.map(item => {
                    return <Property key={item.id} property={item} />;
                })
            }
        </div>
        </section>
    </>
  );
}