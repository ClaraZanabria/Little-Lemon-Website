import React from "react";
import Section from "./layout/Section";
import SectionContent from "./layout/SectionContent";

const Article = () => {
    return (
        <Section>
         <SectionContent>
                <div className="section-article">
                    <h1 className="section-article-h1">Article</h1>
                    <h2 className="section-article-h2">Chicago</h2>
                    <p className="section-article-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
                </div>
                <div className="section-article-img1">
                    <img src="chef1.jpg" alt="chef1" className="section-article-img1"></img>
                </div>
                <div className="section-article-img2">
                    <img src="chef2.jpg" alt="chef2" className="section-article-img2"></img>
                </div>
            </SectionContent>
         </Section>
    )
};
export default Article;