import { useState } from "react";

const useForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const aux = { ...data };
    aux[e.target.name] = e.target.value;
    setData(aux);
  };

  const handleSubmit = callback => event => {
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
  };

  return [{ data, loading }, handleChange, handleSubmit];
};

export default useForm;
