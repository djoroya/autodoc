const VarsDoc = ({vars}) => {

    if (!vars || vars.length === 0) {
        return <p>No documentation found.</p>
    }
    // must be a list no a object
    if (!Array.isArray(vars)) {
        return <p>Invalid documentation format.</p>
    }
    // table all lines 
    return (
            <table className="table table-striped" style={{border: '2px solid #ccc', margin: '1pt' , width: '100%', textAlign: 'center', borderCollapse: 'collapse', borderSpacing: '0', padding: '5px'}}>
              <thead>
                <tr style={{border: '1px solid #ccc', margin: '1pt'}}>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>keys</th>
                </tr>
              </thead>
              <tbody>
                {  vars.map(input => (
                  <tr key={input.name} style={{border: '1px solid #ccc', margin: '1pt'}}>
                    <td><strong>{input.name}</strong></td>
                    <td><em>{input.type}</em></td>
                    <td>{input.description}</td>
                    <td>
                      {input.keys ? 
                      <table className="table table-striped" style={{border: '1px solid #ccc', margin: '1'}}>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {input.keys && input.keys.map((key, i) => (
                            <tr key={key.name}>
                              <td>{key.name}</td>
                              <td>{key.type}</td>
                              <td>{key.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table> :
                      <p>-</p>
                      }
                    </td>                      
                  </tr>
                )) } 
              </tbody>
            </table>
    )
}

export default VarsDoc;