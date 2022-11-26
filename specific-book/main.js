const handleSelect = (e) => {
  const obj = {
    _id,
    qwantity: e.target.value,
    cost: price * e.target.value,
  };

  onSelectQwantity(obj);
};
