type Props = {
  image: string;
}

const SuccessContent = (props: Props) => {
  return (
    <div>
      <h2>Error</h2>
      <p>There was an error loading the media card.</p>
    </div>
  )
};

export default SuccessContent;
