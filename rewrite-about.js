const fs = require('fs');

const pageContent = fs.readFileSync('app/about/page.tsx', 'utf8');

const newEducationSection = `
      {/* Education Timeline */}
      <div style={{ marginTop: "6rem", maxWidth: "800px" }}>
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "var(--step-h3)",
            color: "var(--color-ink)",
            marginBottom: "3rem",
            letterSpacing: "-0.01em",
          }}
        >
          Education
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", position: "relative" }}>
          {/* Vertical line connecting the timeline */}
          <div 
            style={{ 
              position: "absolute", 
              left: "6px", 
              top: "10px", 
              bottom: "10px", 
              width: "1px", 
              backgroundColor: "var(--color-line)",
              zIndex: 0
            }} 
          />

          {[
            {
              title: "Master of Fine Arts - MFA, Fashion/Apparel Design",
              school: "ACADEMY OF ART UNIVERSITY",
              years: "2019 - 2022",
              description: "Master of Fine Arts program focused on Fashion and Apparel Design."
            },
            {
              title: "Higher Diploma, FinTech",
              school: "THE UNIVERSITY OF HONG KONG",
              years: "2018 - 2019",
              description: "Higher Diploma focusing on Financial Technology."
            },
            {
              title: "The Dale Carnegie Course",
              school: "DALE CARNEGIE TRAINING",
              years: "2018",
              description: "Professional development and leadership training."
            },
            {
              title: "Bachelor's Degree, Textile Sciences and Engineering",
              school: "CHINESE CULTURE UNIVERSITY",
              years: "2009 - 2014",
              description: "Undergraduate degree focusing on Textile Sciences and Engineering."
            },
            {
              title: "Complete Python Bootcamp, Computer Programming",
              school: "UDEMY ACADEMY",
              years: "2017 - 2018",
              description: "Comprehensive bootcamp on Python programming."
            }
          ].map((item, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "3rem" }}>
              {/* Timeline dot */}
              <div 
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0.5rem",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  border: "2px solid #e879f9", // Pink color matching the screenshot
                  backgroundColor: "var(--color-canvas)",
                  zIndex: 1
                }}
              />
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ flex: "1 1 auto" }}>
                  <h3 
                    style={{ 
                      fontFamily: "var(--font-syne)", 
                      fontSize: "var(--step-h5)", 
                      fontWeight: 700, 
                      color: "var(--color-ink)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>
                  <div 
                    style={{ 
                      fontFamily: "var(--font-space-mono)", 
                      fontSize: "0.75rem", 
                      color: "var(--color-muted)", 
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "1rem"
                    }}
                  >
                    {item.school}
                  </div>
                </div>
                
                {/* Year pill */}
                <div 
                  style={{ 
                    backgroundColor: "#fce7f3", // Light pink background
                    color: "#db2777", // Darker pink text
                    padding: "0.25rem 0.75rem", 
                    borderRadius: "9999px",
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap"
                  }}
                >
                  {item.years}
                </div>
              </div>
              
              <p style={{ margin: 0, color: "var(--color-ink)", fontSize: "var(--step-small)", lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
`;

const updatedContent = pageContent.replace('</article>', newEducationSection + '\n    </article>');

fs.writeFileSync('app/about/page.tsx', updatedContent);
console.log('Updated app/about/page.tsx');
