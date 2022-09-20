const plain = () => null;

export const getServerSideProps = async ({res}) => {
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  res.setHeader('X-Author', 'lembutt');
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.end('lembutt');
  return { props: {} }
}

export default plain;
