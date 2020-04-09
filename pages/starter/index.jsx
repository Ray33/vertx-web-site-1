import Layout from "../../components/layouts/Page";
import StarterForm from "../../components/starter/StarterForm"

const url = "https://start.vertx.io/metadata";

export default () => {

  return (
      <Layout meta={{title: "Vert.x | Starter"}}>
        <h2>Create a new Vert.x application</h2>
        <StarterForm/>
      </Layout>
  );
};
