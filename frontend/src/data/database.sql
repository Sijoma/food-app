CREATE TABLE "public"."recipe" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "title" text NOT NULL,
    "description" text NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."recipe" ("id", "title", "description") VALUES
('1d1904b8-be1d-4487-b5b5-846963b3f7c6', 'Cuddle Dick Soup', 'A magnificent soup with the special flavour'),
('5b639493-f62a-4f01-bbbf-3a5cea327072', 'Nudeln mit Reibekäse', 'Sehr lecker bei jeder Gelegenheit');

CREATE SEQUENCE IF NOT EXISTS tags_id_seq;

CREATE TABLE "public"."tag" (
    "id" int4 NOT NULL DEFAULT nextval('tags_id_seq'::regclass),
    "title" text NOT NULL,
    "description" text,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."tag" ("id", "title", "description") VALUES
('1', 'Einhand', 'Mit einer Hand essbar!'),
('2', 'Hauptspeise', NULL),
('3', 'Dessert', NULL),
('4', 'Vorspeise', NULL);

CREATE TABLE "public"."recipe_tag" (
    "recipe_id" uuid NOT NULL,
    "tag_id" int4 NOT NULL,
    CONSTRAINT "recipe_tag_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "public"."recipe"("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT "recipe_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tag"("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
    PRIMARY KEY ("recipe_id","tag_id")
);

INSERT INTO "public"."recipe_tag" ("recipe_id", "tag_id") VALUES
('1d1904b8-be1d-4487-b5b5-846963b3f7c6', '1'),
('1d1904b8-be1d-4487-b5b5-846963b3f7c6', '4');


CREATE TABLE "public"."unit" (
    "title" text NOT NULL,
    "long_title" text NOT NULL,
    PRIMARY KEY ("title")
);

INSERT INTO "public"."unit" ("title", "long_title") VALUES
('g', 'Gramm'),
('kg', 'Kilogramm'),
('l', 'Liter');

CREATE TABLE "public"."ingredient" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "name" text NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."ingredient" ("id", "name") VALUES
('108c66b8-9239-411b-88aa-cc3f5c0197be', 'Tomaten'),
('2a64084d-9562-410b-99fd-a8580f1d8f9c', 'Reibekäse'),
('a5a8cd03-089d-435b-a27b-334a1e668075', 'Äpfel'),
('afbd28fc-d323-4c9b-8dc8-255860a0f70b', 'Spaghetti');

CREATE TABLE "public"."recipe_ingredient" (
    "recipe_id" uuid NOT NULL,
    "ingredient_id" uuid NOT NULL,
    "quantity" numeric NOT NULL,
    "unit" text NOT NULL,
    CONSTRAINT "recipe_ingredient_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "public"."recipe"("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT "recipe_ingredient_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "public"."ingredient"("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT "recipe_ingredient_unit_title_fkey" FOREIGN KEY ("unit") REFERENCES "public"."unit"("title") ON DELETE RESTRICT ON UPDATE RESTRICT,
    PRIMARY KEY ("recipe_id","ingredient_id")
);

INSERT INTO "public"."recipe_ingredient" ("recipe_id", "ingredient_id", "quantity", "unit") VALUES
('5b639493-f62a-4f01-bbbf-3a5cea327072', '2a64084d-9562-410b-99fd-a8580f1d8f9c', '50', 'g'),
('5b639493-f62a-4f01-bbbf-3a5cea327072', 'afbd28fc-d323-4c9b-8dc8-255860a0f70b', '1', 'kg');