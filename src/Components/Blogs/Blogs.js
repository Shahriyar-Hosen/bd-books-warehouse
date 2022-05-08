import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container row row-cols-1 row-cols-md-2 g-4 w-100 mx-auto my-5">
      <Row xs={1} md={2} className="g-4">
        <Col id="q-1">
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
                Card title
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-info fs-2">
                Card title
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-info fs-2">
                Card title
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
