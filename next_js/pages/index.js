export  default function home_page({message}){
    return <h1>{message}</h1>;
}

export async function getServerSideProps() {
    let message = "this message rendered at server side";
    return {
      props: {
          message : message
      }, // will be passed to the page component as props
    }
}
