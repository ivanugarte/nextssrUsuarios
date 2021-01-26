import Navigation from './navigation'
import Head from 'next/head'

const Container = (props) => (
  <div>
    <Head>
      <title>project Next SSS Usuarios</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" />
    </Head>
    <Navigation />
    <div className="container p-4">
      {props.children}
      <Head>  
        {/* <h1></h1> */}
      </Head>
    </div>
  </div>
)

export default Container