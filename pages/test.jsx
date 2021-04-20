const Page = () => <h1>Hello JavaScript</h1>

export const getServerSideProps = async () => {
  return { notFound: true }
}

export default Page
