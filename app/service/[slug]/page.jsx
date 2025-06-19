import React from 'react'
import PageHeader from '../../components/pageHeader'
import ServiceAvalibality from '../../components/Services/serviceAvalibality'
import ServiceCard from '../../components/Services/serviceCard'
import ServiceList from '../../components/Services/serviceList'
import ServiceWhyChoose from '../../components/Services/serviceWhychoose'
import ServiceCareProcess from '../../components/Services/serviceCareProcess'
import Faqs from '../../components/Services/servicesFaqs'
import Header from '../../components/header'
import Footer from '../../components/footer'
import data from '@/app/components/Services/services.json'

export async function generateStaticParams() {
    const slugs = Object.keys(data);

    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    alternates: {
      canonical: `https://ytchealthcare.com/service/${slug}`,
    },
    // Optionally add title, description, etc.
  };
}

export default function Service({ params }) {
    const slug = params.slug;
    console.log(slug, 'slug');
    const content = data[slug];

    if (!content) {
        console.log('Content not found for slug:', slug);
        return <div>Service Not Found</div>;
    }

    return (
        <div>
            <Header />
            <div className='mx-3 sm:mx-4 md:mx-5'>
                <PageHeader img={content.pageimage} title={content.pagetitle} description={content.pagedescription} />
            </div>
            <ServiceAvalibality data={content.avalibalitySection} />
            <ServiceCard data={content.cardSection} />
            {content.listSection && <ServiceList data={content.listSection} />}
            <div className='mx-4 '>
                <ServiceWhyChoose data={content.whyChooseSection} />
            </div>
            <ServiceCareProcess data={content.processSection} />
            <Faqs data={content.faqsSection} />
            <Footer />
        </div>
    )
}
