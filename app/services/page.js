import React from 'react'
import PageHeader from '../components/pageHeader'
import ServiceAvalibality from '../components/Services/serviceAvalibality'
import ServiceCard from '../components/Services/serviceCard'
import ServiceList from '../components/Services/serviceList'
import ServiceWhyChoose from '../components/Services/serviceWhychoose'
import ServiceCareProcess from '../components/Services/serviceCareProcess'
import Faqs from '../components/Services/servicesFaqs'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Service() {
    return (
        <div>
            <Header />
            <PageHeader />
            <ServiceAvalibality />
            <ServiceCard />
            <ServiceList />
            <ServiceWhyChoose />
            <ServiceCareProcess />
            <Faqs/>
            <Footer />
        </div>
    )
}
