import React from "react";
import Resume from '../../ARothschild_Resume.pdf'

const ResDisplay = props => (
  <>
    {Resume ? window.location.replace("https://drive.google.com/uc?id=1XEp6tOcL3fIRhvA2SIj_Ao-SPNkFgvVC") : null}
  </>
)

export default ResDisplay