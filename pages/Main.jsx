import { Text, View, StyleSheet, ScrollView} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function getTypeDetail() {
    var organization = getDonatedOrganization();

    var donatedType = [0,0,0,0,0,0,0,0];

    organization.map(value => {
        donatedType[value.type] += 123;
    })
    return donatedType;
}

function getScore() {
    var organization = getDonatedOrganization();

    return organization.length * 123;
}

function getBankAccountMoney() {
    return "100,000"
}

function getTotalDonated() {
    var sum = 0;
    getDonatedOrganization().map((value, index) => {
        sum += value.donnated;
    })
    return sum;
}

function getDonatedOrganization() {
    var arr = [{
        name: "Planet Tree",
        type: 1,
        donnated: 10,
    }, {
        name: "Planet Animal",
        type: 2,
        donnated: 12,
    }, {
        name: "Save Children",
        type: 3,
        donnated: 43,
    },
    {
        name: "Planet Tree 1",
        type: 1,
        donnated: 10,
    }, {
        name: "Planet Animal 1",
        type: 2,
        donnated: 15,
    }, {
        name: "Save Children 1",
        type: 3,
        donnated: 25,
    },
    {
        name: "Planet Tree 2", 
        type: 1,
        donnated: 3,
    }, {
        name: "Planet Animal 2",
        type: 2,
        donnated: 23,
    }, {
        name: "Save Children 1",
        type: 3,
        donnated: 4,
    },];

    return arr;
}

const getColorByType = (type) => {
  switch (type) {
    case 1:
      return 'green';
    case 2:
      return 'brown';
    case 3:
      return 'pink';
    default:
      return 'black'; 
  }
};

const RoundedBox = () => {
  return (
    <View>
        <View style={styles.scoreBox}>
            <Text>Score:</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{color: 'green', fontSize: 40}}> {getScore()}</Text>
                <Text style={{color: 'green'}}>{"   "+ getTypeDetail()[1] + "   "}</Text>
                <Text style={{color: 'brown'}}>{getTypeDetail()[2] + "   "}</Text>
                <Text style={{color: 'pink'}}>{getTypeDetail()[3] + "   "}</Text>
            </View>
            
        </View>
        <View style={styles.container}>
            <View style={styles.bankAndOrganizationBox}>
                <Text>Bank Account:</Text>
                <Text style={{color: 'blue', fontSize: 20}}> $ {getBankAccountMoney()}</Text>
            </View>
            <View style={styles.bankAndOrganizationBox}>
                <Text>Total Donated: </Text>
                <Text style={{color: 'brown', fontSize: 20}}>  $ {getTotalDonated()}</Text>
            </View>
        </View>
        <ScrollView style={styles.organizationContainter}>
            {getDonatedOrganization().map((value, index) => (
                <View key={index} style={styles.organizationBox}>
                    <Text> {value.name} </Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text style={{color: getColorByType(value.type)}}> $ {value.donnated} </Text>
                    </View>
                </View>
            ))}
            
        </ScrollView>
    </View>
    
  );
};

export default function Main() {
  return (
    <View>
        < RoundedBox />
    </View>
  );
}

const styles = StyleSheet.create({
  scoreBox: {
    paddingLeft: 30,
    paddingTop: 10,

    width: '90%', // Set your desired width
    height: 100, // Set your desired height
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
    marginVertical: 20, // Adjust margin as needed
    alignSelf: 'center',
    marginTop: 30,
    marginLeft: 3,
    marginRight: 3,
  },
  organizationBox: {
    flexDirection: 'row',
    padding: 10,
    width: '90%', // Set your desired width
    height: 40, // Set your desired height
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
    marginVertical: -15,
    alignSelf: 'center',
    marginTop: 30,
    marginLeft: 3,
    marginRight: 3,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    width: '90%',
  },
  organizationContainter: {
    margin: 10,
    overflow: 'hidden',
  },
  bankAndOrganizationBox: {
    padding: 30,
    flex: 1,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
    marginLeft: 3,
    marginRight: 3,
  },
  fixedBox: {
    width: '100%', // Set your desired width
    height: 80, // Set your desired height
    backgroundColor: 'grey',
    marginVertical: 20, // Adjust margin as needed
    alignSelf: 'center',
    marginTop: 30,
    marginLeft: 3,
    marginRight: 3,
    bottom: 50,
    position: 'absolute',
  },
});