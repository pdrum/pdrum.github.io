import React from "react"
import '../../static/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert';

export default function Home() {
  return (
      <>
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
        ))}
      </>
  );
}
