
export const Tables = ({data, label}) => {

 return (
      <>
                  <table className="table w-full container">
                  <thead className="table-header-group text-center">
                  <tr className="table-row">
                        {label.map((el, i) => {
                              return <th className="table-cell text-left text-center" key={i} scope="col">{el}</th>
                        })}
                  </tr>
                  </thead>
                  <div style={{marginTop: '10px'}}></div>
                  <tbody className="table-row-group container text-center">
                     {data.map((el, i) => {  
                        return  <>
                                <tr className="table-row bg-cyan-300">
                                    <td >{i+1}</td>
                                    <td >{el.firstName}</td>
                                    <td >{el.lastName}</td>
                                    <td >{el.phoneNumber}</td>
                                </tr>
                                <div style={{marginTop: '10px'}}></div>
                                </>
                     })}
                  </tbody>
                  </table>
      </>
  );
};