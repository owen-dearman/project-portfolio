export function Biography(): JSX.Element {
  return (
    <section>
      <div className="bioContainer">
        <img
          className="bioImage"
          src="images\bio.jpg"
          alt={"Portrait of Owen Dearman"}
        ></img>
        <div className="bioTextContainer">
          <h2>Junior Software Developer</h2>
          <p>
            I graduated in (BA) English Language and Linguistics in August 2020;
            and (MSc) Forensic Speech Science in September 2021 from the
            University of York. I find it fascinating how humans whom have never
            met each other can, in most cases, instantly communicate with a
            shared language, or with a shared sense of language. During my
            undergraduate degree, I focussed on logical semantics and syntax,
            with a dissertation on the semantic and syntactic structure of
            wh-questions in English, Spanish, Russian, and Bulgarian. Having
            completed my studies, I switched focus to the biomechanics of human
            speech and distinguishing people based on features of their voice.
          </p>

          <p>
            Throughout my postgraduate degree, I had experience of the software
            used to analyse speech and data, such as Praat, R, and automatic
            speaker recognition (ASR) systems. For my postgraduate dissertation,
            I investigated the calibration of these ASR systems in regards to
            speaker ethnicity and reference population size. ASR systems use
            deep neural networks to compare the similarity of two speech samples
            against each other and the reference population to determine a
            likelihood ratio in support of the prosecution hypothesis (that
            speaker A and B are the same person )and defence hypothesis (that
            they are not the same person).
          </p>
        </div>
      </div>

      <p>
        I decided to invest in becoming a junior software developer as I want to
        further explore the intersection between linguistics and technology.
        After taking an introductory course in Python, as well as having a
        recreational interest in computing, I opted to apply to Academy as they
        offer an intensive fulltime scholarship in fullstack development with an
        added focus on leadership training which helps to build personal
        development. The programme pinpoints the following languages for
        coaching:
      </p>

      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Express</li>
        <li>SQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bash</li>
      </ul>

      <p>
        I also act as a photofinish and electronic timing official for athletics
        (track and field) and am accredited by United Kingdom Athletics. This
        voluntary role involves calibrating the cameras involved in photgraphing
        the athletes as they finish the race, with timing to 1/1000th second;
        operating the system throughout an athletics meet whilst communicating
        with other teams as to umpiring, seeding, and producing results; and
        setting up and testing the equipment so that it is running in optimum
        condition. I hope to be able to use the software development skills I
        learn throughout my career to help advance this role and make it easier
        for less technologically adept people to get inolved in athletics
        officiating.
      </p>
    </section>
  );
}
