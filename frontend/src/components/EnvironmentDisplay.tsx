export default function EnvironmentDisplay(){
    return (
        <div>
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
          <small><b> API:</b> {process.env.REACT_APP_API_URL}</small>
        </div>
    )
}

