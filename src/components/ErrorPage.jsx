import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>{err.data}</h1>
      <h2>{err.status}:{err.statusText}</h2>
    </div>
  )
}

export default ErrorPage;