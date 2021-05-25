export const snippetMapping = (data: any) => {
  const keys = Object.keys(data);
  console.log('key::', keys);
  return keys.map((key) => {
    return { key, ...data[key] };
  });
};
