import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css'
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';
import { FaDownload, FaCircleNotch } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });


const CourseDetails = () => {
    const {mode} = useContext(ModeAuthContext);
    const course = useLoaderData();
    console.log(course);
    const { id, name, img, details } = course;

    return (
        <div className='container d-flex'>
            
            <div className='mx-auto card-width'>
                <Card className={`bg-${mode} text-${mode==='light'?'dark':'light'}`}>
                    <Card.Header className='d-flex justify-content-between'>
                        <p>Programme Title: {name}</p>
                        <>
                            <PDFDownloadLink document={
                            <Document>
                                <Page style={styles.body}>
                                <Text style={styles.title} fixed>Course Name: {name}</Text>
                                <Image style={styles.image} src={img} />
                                <Text style={styles.text}>
                                    {details}
                                </Text>
                                <Text
                                    style={styles.pageNumber}
                                    render={({ pageNumber, totalPages }) =>
                                    `${pageNumber} / ${totalPages}`
                                    }
                                />
                                </Page>
                            </Document>
                            } filename="FORM">
                                {({loading}) => (loading ? <FaCircleNotch></FaCircleNotch> : <FaDownload></FaDownload> )}
                            </PDFDownloadLink>
                            
                        </>  
                        </Card.Header>
                    <Card.Img variant="top" src={img} style={{height: '250px'}}/>
                    <Card.Body>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/checkout/${id}`} className='btn btn-primary' >Get Premium Access</Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CourseDetails;