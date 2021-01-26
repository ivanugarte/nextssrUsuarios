import Container from '../components/container'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Users from '../components/users'

const Index = (props) => {
  console.log(props)
  return (
    <Container>
      <Head>
      <title>Pagina principal project Next SSR Usuarios</title>
      </Head>
      <Users users={props.users} />
    </Container>
  )
}

Index.getInitialProps = async (ctx) => {
 const res = await fetch ('https://reqres.in/api/users')
 const resJSON = await res.json()   // transforma el formato promesa en Json 
 return{users: resJSON.data} 
}

export default Index