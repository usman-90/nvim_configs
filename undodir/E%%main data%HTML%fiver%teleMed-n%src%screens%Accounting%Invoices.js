Vim�UnDo� �k� 1gߌ�N���������ӽ
$��I��  J                                  f[�m    _�                     �       ����                                                                                                                                                                                                                                                                                                                                                             f[HO     �   �   �  I                              });5��    �                     �                     5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             f[HP    �   �   �  I                              })5��    �                     �                     5�_�                     �        ����                                                                                                                                                                                                                                                                                                                                                             f[�l     �              I   import dayjs from "dayjs";   3import React, { useEffect, useState } from "react";   6import { useIsFocused } from "@react-navigation/core";   <import { ScrollView, StyleSheet, View } from "react-native";   ;import { IconButton, Searchbar } from "react-native-paper";   Limport { deleteInvoice, getInvoice, getInvoices } from "../../api/invoices";   Cimport ActivityIndicator from "../../components/ActivityIndicator";   8import Table from "../../components/Datatable/AppTable";   -import Header from "../../components/Header";   import moment from "moment";   *import { getUser } from "../../api/users";   9import { useNavigation } from "@react-navigation/native";   0import { getPatient } from "../../api/patients";       1export default function Invoices({isNotGoBack}) {     const focus = useIsFocused();   .  const [update, setUpdate] = useState(false);   +  const [search, setSearch] = useState("");   ?  const [searchedInvoices, setSearchedInvoices] = useState([]);   -  const [invoices, setInvoices] = useState();   ;  const [selectedInvoice, setSelectedInvoice] = useState();   0  const [loading, setLoading] = useState(false);   =  const [checkedInvoices, setCheckedInvoices] = useState([]);   %  const navigation = useNavigation();         useEffect(() => {   )    const callForInvoices = async () => {         setCheckedInvoices([]);         setInvoices([]);         setLoading(true);   /      const { ok, data } = await getInvoices();         if (ok) {   1        const filterInvoices = await Promise.all(   '          data.map(async (invoice) => {   B            const { data: patient } = await getUser(invoice.user);   \            const fullname = `${patient?.contactName?.first} ${patient?.contactName?.last}`;               return {                 id: invoice._id,   '              avatar: patient.imageSrc,   *			  username: patient.username,			  			     +              invoiceNo: invoice.invoiceNo,   ,			  FirstName: patient.firstName,			  			     /			  LastName: patient.lastName,			  			  			     )              Currency: invoice.currency,   %              Amount: invoice.amount,   F              PaidDate: moment(invoice.paidDate).format("DD-MM-YYYY"),   D              DueDate: moment(invoice.dueDate).format("DD-MM-YYYY"),   -              PaidMethod: invoice.paidMethod,   P              TreatmentDate: moment(invoice.treatmentDate).format("DD-MM-YYYY"),   +              Reference: invoice.reference,   !              Note: invoice.note,   H              CreatedOn: moment(invoice.createdOn).format("DD-MM-YYYY"),   %              Status: invoice.status,               };             })   
        );   $        setInvoices(filterInvoices);           setLoading(false);         }       };       callForInvoices();     }, [focus ,update]);          const onChangeSearch = () => {   %    const filtered = invoices.filter(         (el) =>   M        `${el.Invoicename}`.toLowerCase().startsWith(search.toLowerCase()) ||   D        `${el.Email}`.toLowerCase().startsWith(search.toLowerCase())       );   "    setSearchedInvoices(filtered);     };         // if (showModal) {     //   return (     //     <AddOrEditInvoice   ,  //       selectedInvoice={selectedInvoice}   2  //       setSelectedInvoice={setSelectedInvoice}     //       visible={showModal}   $  //       setVisible={setShowModal}      //       setUpdate={setUpdate}     //       update={update}     //     />   	  //   );     // }       
  return (       <View style={{ flex: 1 }}>   -      <ActivityIndicator visible={loading} />   E      <Header back={isNotGoBack ? false : true} title={"Invoices"} />         <IconBar   %        //setShowModal={setShowModal}   )        checkedInvoices={checkedInvoices}   /        setCheckedInvoices={setSelectedInvoice}   1        //setSelectedInvoice={setSelectedInvoice}           setUpdate={setUpdate}           update={update}           navigation={navigation}         />         <Searchbar           style={styles.search}   %        underlineColorAndroid="white"           placeholder="Search"   '        clearButtonMode="while-editing"           value={search}   #        onChangeText={(search) => {   "          if (search.length < 1) {   "            setSearchedInvoices();             } else {               setSearch(search);               onChangeSearch();             }   
        }}         />   +      {invoices && invoices.length > 0 && (           <Table             tableData={   ;            searchedInvoices && searchedInvoices.length > 0                  ? searchedInvoices                 : invoices             }             showCheckbox   #          checked={checkedInvoices}   )          setChecked={setCheckedInvoices}   
        />         )}       </View>     );   }       const IconBar = ({     //setShowModal,     checkedInvoices,     setCheckedInvoices,     //setSelectedInvoice,     setUpdate,   	  update,     navigation,   }) => {           return (   ?        <View style={{ height: 60, justifyContent: "center" }}>   J            <ScrollView horizontal showsHorizontalScrollIndicator={false}>                   <IconButton                       icon="plus"   F                    style={{ marginLeft: 8, backgroundColor: "#07f" }}   !                    color="white"   M                    onPress={() => navigation.navigate("OperationsInvoice", {   ,                        selectedInvoice: {},                       })}                   />                   <IconButton                       icon="eye"   F                    style={{ marginLeft: 8, backgroundColor: "blue" }}   !                    color="white"   $                    onPress={() => {   B                        if (checkedInvoices.length.length === 0) {   #                            return;                           }   ?                        navigation.navigate("InvoiceProfile", {   9                            invoiceId: checkedInvoices[0]                           })                       }                       }                   />                       <IconButton   !                    icon="pencil"   H                    style={{ marginLeft: 8, backgroundColor: "yellow" }}   !                    color="black"   *                    onPress={async () => {   B                        if (checkedInvoices.length.length === 0) {   #                            return;                           }       R                        const { ok, data } = await getInvoice(checkedInvoices[0]);   !                        if (ok) {   2                            const cleanInvoice = {   .                                _id: data._id,   2                                payer: data.payer,   0                                user: data.user,   :                                invoiceNo: data.invoiceNo,   8                                currency: data.currency,   8                                services: data.services,   8                                products: data.products,   4                                amount: data.amount,   4                                status: data.status,   B                                treatmentDate: data.treatmentDate,   <                                paidMethod: data.paidMethod,                               };   F                            navigation.navigate("OperationsInvoice", {   >                                selectedInvoice: cleanInvoice,                               });                           }                       }}                   />                   <IconButton   !                    icon="delete"   F                    style={{ marginLeft: 8, backgroundColor: "#f44" }}   !                    color="white"   $                    onPress={() => {   D                        if (checkedInvoices.length < 1) return null;   F                        checkedInvoices.forEach(async (invoiceId) => {   J                            const { ok } = await deleteInvoice(invoiceId);   %                            if (ok) {   7                                console.log("deleted");   3                                setUpdate(!update);                               }                           })}} />                   <IconButton             icon="pencil"   >          style={{ marginLeft: 8, backgroundColor: "yellow" }}             color="black"              onPress={async () => {   6            if (checkedInvoices.length.length === 0) {                 return;               }       F            const { ok, data } = await getInvoice(checkedInvoices[0]);               if (ok) {   $              const cleanInvoice = {                   _id: data._id,                    user: data.user,   *                invoiceNo: data.invoiceNo,   (                currency: data.currency,   (                services: data.services,   (                products: data.products,   $                amount: data.amount,   $                status: data.status,                 };   8              navigation.navigate("OperationsInvoice", {   .                selectedInvoice: cleanInvoice,                 });               }             }}   
        />           <IconButton             icon="delete"   <          style={{ marginLeft: 8, backgroundColor: "#f44" }}             color="white"             onPress={() => {   8            if (checkedInvoices.length < 1) return null;   :            checkedInvoices.forEach(async (invoiceId) => {   <              const { ok } = await deleteInvoice(invoiceId);                 if (ok) {   '                console.log("deleted");   #                setUpdate(!update);                 }               });                                          }}   
        />           <IconButton             icon="file-delimited"   <          style={{ marginLeft: 8, backgroundColor: "lime" }}             color="white"   
        />           <IconButton             icon="file-pdf-box"   ;          style={{ marginLeft: 8, backgroundColor: "red" }}             color="white"   
        />           <IconButton              icon="microsoft-excel"   =          style={{ marginLeft: 8, backgroundColor: "green" }}             color="white"   
        />           <IconButton             icon="printer"   =          style={{ marginLeft: 8, backgroundColor: "brown" }}             color="white"   
        />           <IconButton             icon="cloud-upload"   <          style={{ marginLeft: 8, backgroundColor: "cyan" }}             color="black"   
        />           <IconButton             icon="lock"   ;          style={{ marginLeft: 8, backgroundColor: "red" }}             color="white"   
        />           <IconButton             icon="lock-open"   =          style={{ marginLeft: 8, backgroundColor: "green" }}             color="white"   
        />           <IconButton             icon="hand-right"   ;          style={{ marginLeft: 8, backgroundColor: "red" }}             color="white"   
        />           <IconButton             icon="at"   <          style={{ marginLeft: 8, backgroundColor: "#0af" }}             color="white"   
        />           <IconButton             icon="chat"   <          style={{ marginLeft: 8, backgroundColor: "#0af" }}             color="white"   
        />         </ScrollView>       </View>     );   };       "const styles = StyleSheet.create({     container: {       flex: 1,       backgroundColor: "white",     },     rightContainer: {       flexDirection: "row",       alignItems: "center",       justifyContent: "flex-end",       paddingRight: 5,       width: "100%",     },     search: {       marginVertical: 10,       marginHorizontal: 10,       borderWidth: 0,       shadowOpacity: 0,       elevation: 0,     },   });5�5��