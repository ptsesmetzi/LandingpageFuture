import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TestimonialLService {
  constructor() {}

  getPages() {
    return {
      pages: [
        {
          students: [
            {
              name: "Peter",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "HTML/CSS"
            },
            {
              name: "Bob",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "JavaScript"
            },
            {
              name: "Justus",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "C++"
            }
          ]
        },
        {
          students: [
            {
              name: "Natalie",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "Phyton"
            },
            {
              name: "Eugenia",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "CAD"
            },
            {
              name: "Maureen",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "Solidworks"
            }
          ]
        },
        {
          students: [
            {
              name: "Salome",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "Java"
            },
            {
              name: "Tarryn",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "C++"
            },
            {
              name: "Li-Ang",
              desc:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maga aliqua. Quis ipsum supendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel fascilisis.",
              imagePath: "assets/img/pics/Absolvent.png",
              modul: "RubyOnRails"
            }
          ]
        }
      ]
    };
  }
}
