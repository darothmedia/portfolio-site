import React from "react";
import Resume from '../../ARothschild_Resume.pdf'

const ResDisplay = props => (
  <>
    {Resume ? window.location.replace("https://drive.google.com/uc?id=1E_0JGcaXSm2H-ILQkn9hjQdTlwHhX7Pu") : null}
  </>
)

export default ResDisplay