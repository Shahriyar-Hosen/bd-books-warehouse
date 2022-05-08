import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container w-100 mx-auto my-5">
      <Row xs={1} md={2} className="g-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-info fs-2">
                Difference between javascript and nodejs(জাভাস্ক্রিপ্ট এবং নোড
                জেএস মধ্যে পার্থক্য)
              </Card.Title>
              <Card.Text>
                <Table hover className="table-responsive table-info">
                  <thead className="text-center">
                    <tr>
                      <th className=" table-warning fs-1">🏅</th>
                      <th className=" table-warning  fs-5">JavaScript</th>
                      <th className=" table-warning fs-5">Node.js</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="  text-center">1</td>
                      <td className="">{`জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং language যা ওয়েবসাইটে scripts লেখার জন্য ব্যবহৃত হয়।`}</td>
                      <td className="">{`নোডজেএস একটি জাভাস্ক্রিপ্ট রানটাইম environment।`}</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td className="">{`জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চালানো যায়।`}</td>

                      <td className="">{`আমরা NodeJS এর সাহায্যে ব্রাউজারের বাইরে Javascript চালাতে পারি।`}</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td className="">{`এটি মূলত ক্লায়েন্ট-সাইডে ব্যবহৃত হয়।`}</td>

                      <td className="">{`এটি বেশিরভাগই সার্ভার-সাইডে ব্যবহৃত হয়।`}</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td className="">{`Javascript HTML যোগ করতে এবং DOM এর সাথে কাজ করতে পারে।`}</td>

                      <td className="">{`Nodejs এর HTML ট্যাগ যোগ করতে পারে না।`}</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td className="">{`Javascript যেকোন browser ইঞ্জিনে চলতে পারে যেমনঃ chrome, safari and Firefox।`}</td>

                      <td className="">{`node.js জাভাস্ক্রিপ্ট চালানোর জন্য ব্রাউজারের V8  ইঞ্জিন কে আলাদা করে সাথে কিছু C++ অ্যাড করে জাভাস্ক্রিপ্ট পার্স করে এবং চালায়।`}</td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td className="">{`জাভাস্ক্রিপ্ট ফ্রন্টএন্ড ডেভেলপমেন্টে ব্যবহার করা হয়।`}</td>

                      <td className="">{`Nodejs সার্ভার-সাইড ডেভেলপমেন্টে ব্যবহার করা হয়।`}</td>
                    </tr>
                    <tr>
                      <td className="text-center">7</td>
                      <td className="">{`এটি ECMA স্ক্রিপ্টের আপগ্রেড সংস্করণ যা C++ এ লেখা Chrome এর V8 ইঞ্জিন ব্যবহার করে।`}</td>

                      <td className="">{`Node.js লেখা হয় C, C++, এবং Javascript-এ।`}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-info fs-2">
                {`Differences between SQL and NoSQL databases(SQL এবং NoSQL ডাটাবেসের মধ্যে পার্থক্য)`}
              </Card.Title>
              <Card.Text>
                <p>
                  একটি ডাটাবেস নির্বাচন করার ক্ষেত্রে সবচেয়ে বড় সিদ্ধান্ত হল
                  একটি রিলেশনাল (SQL) বা অ-রিলেশনাল (NoSQL) ডেটা স্ট্রাকচার
                  বাছাই করা। যদিও উভয় ডাটাবেসই কার্যকর বিকল্প তবুও উভয়ের মধ্যে
                  কিছু মূল পার্থক্য রয়েছে যা ব্যবহারকারীদেরকে সিদ্ধান্ত নেওয়ার
                  সময় মনে রাখতে হবে।
                </p>
                <Table hover className="table-responsive table-info">
                  <thead className="text-center">
                    <tr>
                      <th className=" table-warning fs-1">🏅</th>
                      <th className=" table-warning  fs-5">SQL</th>
                      <th className=" table-warning fs-5">NoSQL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="  text-center">1</td>
                      <td className="">
                        SQL হল রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS)
                      </td>
                      <td className="">
                        NoSQL হল নন-রিলেশনাল বা ডিস্ট্রিবিউটেড ডাটাবেস সিস্টেম।
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td className="">
                        এই ডাটাবেসগুলিতে ফিক্সট বা স্ট্যাটিক বা পূর্বনির্ধারিত
                        স্কিমা/ডিজাইন রয়েছে{" "}
                      </td>

                      <td className="">NoSQLএর ডায়নামিক স্কিমা/ডিজাইন আছে</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td className="">
                        এই ডাটাবেস শ্রেণীবদ্ধ ডেটা সংরক্ষণের জন্য উপযুক্ত নয়
                      </td>

                      <td className="">
                        এই ডাটাবেসগুলি শ্রেণীবদ্ধ ডেটা সংরক্ষণের জন্য সবচেয়ে
                        উপযুক্ত
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td className="">
                        এই ডাটাবেসগুলি জটিল কুয়েরির জন্য সবচেয়ে উপযুক্ত
                      </td>

                      <td className="">
                        এই ডাটাবেসগুলি জটিল কুয়েরির জন্য অত ভাল নয়
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-info fs-2">
                {`When should you use nodejs and when should you use MongoDB(কখন আপনার nodejs ব্যবহার করা উচিত এবং কখন MongoDB ব্যবহার করা উচিত)`}
              </Card.Title>
              <Card.Text>
                <h4>When should you use I node.js</h4>
                <p>{`Node.js সাধারণত নন-ব্লকিং,  সিঙ্গেল-থ্রেড প্রকৃতির কারণে ইভেন্ট-চালিত সার্ভারের জন্য ব্যবহৃত হয়। এটি  ট্রেডিশনাল ওয়েবসাইট এবং ব্যাক-এন্ড API গুলোর জন্য ব্যবহৃত হয়, তবে  রিয়েল-টাইম, নেটওয়ার্ক-হেবি আর্কিটেকচারকে মাথায় রেখে ডিজাইন করা হয়েছে। অর্থাৎ, আমাদের কাছে রিয়েল-টাইম, দ্বি-মুখী সংযোগ সহ ওয়েব অ্যাপ্লিকেশন রয়েছে, যেখানে ক্লায়েন্ট এবং সার্ভার উভয়ই যোগাযোগ করতে পারে, তাদের স্বচ্ছন্দে ডেটা বিনিময় করার অনুমতি দেয়।`}</p>

                <h4>when should I use MongoDB?</h4>
                <p>{`MongoDB-তে JSON আকারে ফাইল গুলো সাজানো থাকে সে ক্ষেত্রে যারা জাভাস্ক্রিপ্ট নিয়ে কাজ করে তাদের জন্য বুঝতে এবং কাজ করতে অনেক সুবিধা হয়। আর এই কারণে সাধারণত node.js এর সাথে  সবচেয়ে বেশি MongoDB ব্যবহার করা হয়। এটাকেই বলা হয় NoSQL ডেটা  স্ট্রাকচার। NoSQL ডাটাবেজ কে  ডকুমেন্ট টাইপের ডাটাবেজ বলা হয়। NoSQL ডাটাবেজ গুলোতে যে ধরনের JSON  ফাইল আমরা দেখতে পাই সেগুলো কে MongoDB সাধারনত BJSON আকারে রাখে।  যাতে করে Quary করে ডাটা আনতে সময় কম লাগে। আর এই কারনেই   জাভাস্ক্রিপ্ট এর সাথে MongoDB ব্যবহার  করলে পারফর্মেন্স ভালো পাওয়া যায়।`}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-info fs-2">
                {`What is the purpose of JWT and how does it work(JWT এর উদ্দেশ্য কি এবং এটি কিভাবে কাজ করে)`}
              </Card.Title>
              <Card.Text>
                {`JWT গোপনে তথ্য প্রেরণ করার সময় সিকিউর করার সিস্টেম। এই তথ্যগুলো ক্লায়েন্ট থেকে সার্ভারে পাঠানোর সময় সিকিউর করা হয়। এই সিস্টেমে যারা অথরাইজড না তাদেরকে ডাটা দেওয়া হয় না। ইউজার অথেন্টিকেশন করার সময় সার্ভার থেকে একটি টোকেন তৈরি হয়।   এই টোকেন টা সার্ভার থেকে ক্লায়েন্ট এ আসে। এই টোকেন টা local storage অথবা browser cookies রাখা হয়। এরপরে যখন কোন রিকোয়েস্ট পাঠানো হয় ব্যাক এন্ড এ তখন Bearer এর সাথে টোকন টা পাঠানো হয়।  এরপর সার্ভার  টোকেন  টাকে ভেরিফাই করে। যদি ভেরিফাই টোকন হয়ে থাকে তাহলে নির্দিষ্ট অথরাইজড  ডাটা  প্রদান করে।`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
