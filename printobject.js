function processObject(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return { keys, values };
  }
  
  const obj = { id: 2, status: 'Active', title: 'test' };
  const result = processObject(obj);
  console.log('Keys:', result.keys.join(', '));
  console.log('Values:', result.values.join(', '));