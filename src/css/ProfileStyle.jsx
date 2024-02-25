import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
    minHeight: 200,
    margin: 5,
    marginTop: 0,
    zIndex: -100,
    overflow: 'visible'
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    height: 400,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonDonate: {
    backgroundColor: 'green',
  },
  buttonClose: {
    backgroundColor: 'red',
  }
});