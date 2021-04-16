import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import StartPage from "../components/StartPage/StartPage";
import Country from "../components/countryPage/countryPage";
import QuestionList from "../components/QuestionList/QuestionList";
import AgePage from "../components/agePage/agePage";
import ReportPage from "../components/ReportPage/ReportPage"

const screens = {
  
  Home: {
    screen: StartPage,
    
  },
  CountryPage: {
    screen: Country,
  },
  Questions: {
    screen: QuestionList,
  },
  Age: {
    screen: AgePage,
  },
  Report: {
    screen: ReportPage,
  },
};
const config = {
  headerMode: 'none',
  initialRouteName: 'Home'
}

const homestack = createStackNavigator(screens,config);

export default createAppContainer(homestack);
