import { Helmet } from "react-helmet-async";
import Comodidades from "../../components/sobre_nos/comodidades.component";
import Parcerias from "../../components/sobre_nos/parcerias.component";
import SobreNosHistory from "../../components/sobre_nos/sobreNos-history";

function SobreNosPage() {
  
  return (
    <div>
        <Helmet>
          <title>Quinta das Fontes - Sobre nós</title>
          <meta name="description"  content="Bem-vindos à Quinta das Fontes, uma história desde 1904..." />
        </Helmet>
        <SobreNosHistory/>
        <Comodidades/>
        <Parcerias/>
    </div>
  );
}

export default SobreNosPage;
