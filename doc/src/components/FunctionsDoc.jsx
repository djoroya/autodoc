// FunctionsDocumentation.jsx
import VarsDoc from './VarsDoc';

const FunctionsDoc = ({ func,ismethod }) => (
  <details>
    <summary className="fw-bold">
      { ismethod ? 
       <code className="language-python">{`${func.name}`}</code>
      :
      <code className="language-python">{`from ${func.module} import ${func.name}`}</code>
      }
    </summary>

    {func.parsed_metadata && (
      <>
        <h5>Description:</h5>
        <p>{func.parsed_metadata.description}</p>

        <h5>Inputs:</h5>
        <VarsDoc vars={func.parsed_metadata.inputs} />
  

        <h5>Outputs:</h5>
        <VarsDoc vars={func.parsed_metadata.outputs} />
      </>
    ) || (
      <p>No documentation found.</p>
    )}
  </details>
  );
  
  export default FunctionsDoc;
  