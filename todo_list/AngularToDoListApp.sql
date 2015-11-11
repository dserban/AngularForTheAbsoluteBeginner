CREATE TABLE to_do_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  done BOOLEAN NOT NULL,
  description TEXT NOT NULL
);
CREATE INDEX index_on_done ON to_do_items (done);

INSERT INTO to_do_items VALUES(NULL, 'f', 'Buy milk');
INSERT INTO to_do_items VALUES(NULL, 't', 'Learn Rails');
INSERT INTO to_do_items VALUES(NULL, 'f', 'Do homework');
INSERT INTO to_do_items VALUES(NULL, 't', 'Pay my rent');
INSERT INTO to_do_items VALUES(NULL, 'f', 'Renew online subscription');
INSERT INTO to_do_items VALUES(NULL, 'f', 'Lunch with friends');
INSERT INTO to_do_items VALUES(NULL, 'f', 'Edit the draft for the flyer');
INSERT INTO to_do_items VALUES(NULL, 't', 'Call Nancy');
INSERT INTO to_do_items VALUES(NULL, 'f', 'Brainstorm with our team');
INSERT INTO to_do_items VALUES(NULL, 'f', 'Prepare slides for my talk next week');
INSERT INTO to_do_items VALUES(NULL, 'f', 'Pack luggage for my trip next week');
INSERT INTO to_do_items VALUES(NULL, 't', 'Take dog to the vet');
INSERT INTO to_do_items VALUES(NULL, 'f', 'Review product feedback');

