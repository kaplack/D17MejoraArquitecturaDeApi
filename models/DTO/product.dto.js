function createProductDTO(newOne, _id, datetime) {
  return {
    ...newOne,
    _id,
    datetime,
  };
}

export default createProductDTO;
