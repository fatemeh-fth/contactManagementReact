import Contact from "./Contact";
import { PINK, RED ,CURRENTLINE , ORANGE} from "../../helpers/colors";
import Spinner from "../Spinner";

const Contacts = ({contacts,loading}) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn my-4" style={{ backgroundColor: PINK }}>
                <i className="fa fa-plus-circle mx-2" />

                Create a new contact
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      {
        loading ? <Spinner/> : (
           <section className="container">
        <div className="row">
          {
           contacts.lenght > 0 ? contacts.map((c) => <contact key={c.id} contact={c} />)
           : (
            <div className="text-center py-5" style={{background: CURRENTLINE}}>
             <p className="h3" style={{color:ORANGE}}>Contact not found  </p>
             <img src={require("../../assets/no-found.gif")} className="w-25" alt="یافت نشد" />
            </div>
           )
          }
        </div>
      </section>
        )
      }
     
    </>
  );
};

export default Contacts;
