import { List, ListItem } from './AboutList.styled';

const AboutList = () => {
  return (
    <List>
      <ListItem>
        <h3>Kreatywne podejście i dbałość o szczegóły</h3>
        <p>
          Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji balonowych, z
          dbałością o szczegóły
        </p>
      </ListItem>
      <ListItem>
        <h3>Materiały przyjazne dla środowiska</h3>
        <p>
          Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne materiały balonowe,
          aby pozostawić jak najmniejszy ślad na środowisku.
        </p>
      </ListItem>
      <ListItem>
        <h3>Szeroka gama kolorów do personalizacji</h3>
        <p>
          Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować
          wystrój na każdą okazję.
        </p>
      </ListItem>
      <ListItem>
        <h3>Gwarancja dostawy i montażu</h3>
        <p>
          Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż,
          zapewniając klientom kompleksową obsługę.
        </p>
      </ListItem>
    </List>
  );
};

export default AboutList;
