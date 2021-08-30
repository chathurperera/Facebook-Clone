import Head from 'next/head'
import Header from '../components/Header'

export default function Home({session}) {
  if(!session) return <Login />
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
    <Header />

    <main>
      {/* sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props:{
      session
    }
  }
}