import axios from 'axios';

export default function Languages(props) {
  const { languagesURL } = props;
  let data;
  const categorizeLanguages = async () => {
    try {
      const response = await axios.get(languagesURL);
      data = response.data;
    } catch (err) {
      console.error(err);
    }
  };
  // let total = 0;
  // let languages = [];
  // const calculateTotal = () => {
  //     for (const lan in data) {
  //         total += data[lan];
  //     }
  // }
  categorizeLanguages();

  // calculateTotal();
  console.log(data);
  // console.log(languages);
  return;
}
