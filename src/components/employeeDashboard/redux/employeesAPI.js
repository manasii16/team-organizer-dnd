import axios from "axios";
const { VITE_API_URL } = import.meta.env;
// api_url = import.meta.env.VITE_API_URL;


// export function fetch_emp_API() {
//   return(
//     axios.get(VITE_API_URL)
//       .then((res) => res.data
//           .map((i) => ({
//             id: i.id.toString(),
//             // username: u.username,
//             name: i.name,
//         }))
//     )
//   )
// }

export function fetch_emp_API() {
  return (
    axios.get(VITE_API_URL)
      .then((res) =>
        res.data.results.map((i) => ({
          id: i.login.uuid,                          
          name: `${i.name.first} ${i.name.last}`,  

          avatarUrl: i.picture.thumbnail,            
        }))
      )
  );
}
