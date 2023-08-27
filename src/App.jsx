import "./App.css";

import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import FaceBook from "./components/FaceBook";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <div className="App">
      {/* ITERATION 1 */}
      {/* <IdCard
        lastName={"Doe"}
        firstName={"John"}
        gender={"male"}
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture={"https://randomuser.me/api/portraits/men/44.jpg"}
      />

      <IdCard
        lastName={"Dolores"}
        firstName={"Obrien"}
        gender={"female"}
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture={"https://randomuser.me/api/portraits/women/44.jpg"}
      /> */}

      {/* ITERATION 2 */}
      {/* <Greetings lang={"de"}>Ludwig</Greetings>
      <Greetings lang={"fr"}>François</Greetings>
      <Greetings lang={"es"}>Jorge</Greetings>
      <Greetings lang={"pt"}>pedro</Greetings> */}

      {/* ITERATION 3 */}
      {/* <Random min={5} max={10} /> */}

      {/* ITERATION 4 */}
      {/* <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} /> */}

      {/* ITERATION 5 */}
      {/* <CreditCard
        type={
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
        }
        number={"0123456789018845"}
        expirationMonth={3}
        expirationYear={2021}
        bank={"BNP"}
        owner={"Maxence Bouret"}
        bgColor={"#11aa99"}
        color={"white"}
      />

      <CreditCard
        type={"https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"}
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type={"https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"}
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      /> */}

      {/* ITERATION 6 */}
      {/* <Rating>1.9</Rating> */}

      {/* ITERATION 7 */}
      {/* <DriverCard
        name={"Travis Kalanick"}
        rating={4.2}
        img={
          "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        }
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      /> */}

      {/* ITERATION 8 */}
      {/* <LikeButton /> */}

      {/* ITERATION 9 */}
      {/* <ClickablePicture 
        img="https://www.gainbridge.io/img/JustinWee.1f49144d.jpg"
        imgClicked="https://m8p8m9h3.stackpathcdn.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg"
      /> */}

      {/* ITERATION 10 */}
      {/* <Dice /> */}

      {/* ITERATION 11 */}
      {/* <Carousel 
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      /> */}

      {/* ITERATION 13 */}
      {/* <FaceBook /> */}

      {/* ITERATION 15 */}
      <SignupPage />
    </div>
  );
}

export default App;
