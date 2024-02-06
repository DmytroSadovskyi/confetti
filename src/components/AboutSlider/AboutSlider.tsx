import { StyledSlider, StyledCard, StyledCardTitle, StyledCardText } from './AboutSlider.styled';

const AboutSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlider {...settings}>
      <StyledCard id="1">
        <StyledCardTitle>Kreatywne podejście i dbałość o szczegóły</StyledCardTitle>
        <StyledCardText>
          Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji balonowych, z
          dbałością o szczegóły
        </StyledCardText>
      </StyledCard>

      <StyledCard id="2">
        <StyledCardTitle>Materiały przyjazne dla środowiska</StyledCardTitle>
        <StyledCardText>
          Wykorzystywane są materiały najwyższej jakości, w tym biodegradowalne materiały balonowe,
          aby pozostawić jak najmniejszy ślad na środowisku.
        </StyledCardText>
      </StyledCard>

      <StyledCard id="3">
        <StyledCardTitle>Szeroka gama kolorów do personalizacji</StyledCardTitle>
        <StyledCardText>
          Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować
          wystrój na każdą okazję.
        </StyledCardText>
      </StyledCard>

      <StyledCard id="4">
        <StyledCardTitle>Gwarancja dostawy i montażu</StyledCardTitle>
        <StyledCardText>
          Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż,
          zapewniając klientom kompleksową obsługę.
        </StyledCardText>
      </StyledCard>
    </StyledSlider>
  );
};

export default AboutSlider;
