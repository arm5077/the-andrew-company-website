import Section from "@/components/shared/Section/Section";
import Row from "@/components/shared/Row/Row";
import Column from "@/components/shared/Column/Column";

export default function GridTest() {
  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
       {/* Hero Section (row-based, split bottom) */}
       <Section fullHeight equalRows>
        <Row position="top" cells="single">
          <div style={{ fontSize: '4rem', fontWeight: 'bold' }}>Hero Headline</div>
        </Row>
        <Row position="bottom" cells="split">
          <div>Product Pitch</div>
          <div>Client Pitch</div>
        </Row>
      </Section>

      {/* Clients Section (row-based, both single) */}
      <Section>
        <Row position="top" cells="single">
          <div>Clients Headline</div>
        </Row>
        <Row position="bottom" cells="single">
          <div>Logo Grid</div>
        </Row>
      </Section>

      {/* Products Section (column-based, single right) */}
      <Section>
        <Column side="left" cells="single">
          <div>Products Headline</div>
        </Column>
        <Column side="right" cells="single">
          <div>Product Cards</div>
        </Column>
      </Section>

      {/* Biography Section (column-based, stacked right) */}
      <Section>
        <Column side="left" cells="single">
          <div>Who Are You Headline</div>
        </Column>
        <Column side="right" cells="stacked">
          <div>Andrew Phelps Bio</div>
          <div>Andrew McGill Bio</div>
        </Column>
      </Section>

       {/* CTAs Section (column-based, single right) */}
       <Section>
        <Column side="left" cells="single">
          <div>Hire Us CTA</div>
        </Column>
        <Column side="right" cells="single">
          <div>Podcast And Newsletter</div>
        </Column>
      </Section>
    </main>
  );
}
