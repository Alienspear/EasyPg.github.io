

class nav{
    constructor(name){
        this.name = name;
    }
}
let nav1 = new nav("Home")
let nav2 = new nav("Room")
let nav3 = new nav("Services")
let nav4 = new nav("Gallery")
let nav5 = new nav("About")
let nav6 = new nav("Contact")


        //main page background: url(main.jpg); background-size: cover;
        let main = document.createElement('div');
        main.style=' height: 730px; width:1440px;  overflow: hidden; position: relative; ';
        document.body.appendChild(main);

        let main_img= document.createElement('img');
        main_img.src="../photo/main.jpg";
        main_img.style=' background-size: cover;height: 730px; width:1440px;  overflow: hidden; position: absolute; ';
        main.appendChild(main_img);

        let logo = document.createElement('img');
        logo.src="../photo/log.jpeg";
        logo.style = "height:70px; width:70px;display: inline-block;position: absolute;border-bottom-right-radius: 10px;left: 0px;top: 0px; ";
        main.appendChild(logo);

        //navbar
       let navbar= document.createElement('div');
       navbar.style= "position:relative;display: flex;justify-content: space-evenly;margin:auto;padding: 30px;width: 50%;margin-top:0px; font-size:18px"
       main.appendChild(navbar);


        let homew = document.createElement('a');
        homew.innerText = nav1.name;
        homew.style = "  text-decoration: none ; color: black; transition: 1s;";
        navbar.appendChild(homew);
        let roomw = document.createElement('a');
        roomw.innerText = nav2.name;
        roomw.style = "  text-decoration: none;  color: black; transition: 0.5s;";
        navbar.appendChild(roomw);
        let servicesw = document.createElement('a');
        servicesw.innerText = nav3.name;
        servicesw.style = "  text-decoration: none;  color: black; transition: 0.5s;";
        navbar.appendChild(servicesw);
        let galleryw = document.createElement('a');
        galleryw.innerText = nav4.name;
        galleryw.style = "  text-decoration: none; color: black; transition: 0.5s;";
        navbar.appendChild(galleryw);
        let aboutw = document.createElement('a');
        aboutw.innerText = nav5.name;
        aboutw.style = "  text-decoration: none; color: black; transition: 0.5s;";
        navbar.appendChild(aboutw);
        let contactw = document.createElement('a');
        contactw.innerText = nav6.name;
        contactw.style = "  text-decoration: none;color: black; transition: 0.5s;";
        navbar.appendChild(contactw);


        let viewButton4 = document.createElement('div');
    viewButton4.style = "  text-align: center;display:flex;margin-left:40%;display: absolute;right: 80px;top: 20px;position: absolute;";
    main.appendChild(viewButton4);

    let inviewBtn4 = document.createElement('a');
    inviewBtn4.innerText = "Log In | ";
    inviewBtn4.style = "margin-left:-20px;height: 30px;cursor: pointer;display: inline-block;position: relative;color: black;text-align: center;font-size: 16px;width: 100px;cursor: pointer;"
    viewButton4.appendChild(inviewBtn4);
    inviewBtn4.addEventListener('click', services3);
    
     function services3(link){
        let x = document.createElement('a');
        x.link = '/LogIn.html';
        window.open(x.link);
    }

    let viewButton5 = document.createElement('div');
    viewButton5.style = "  text-align: center;display:flex;margin-left:40%;display: absolute;right: 20px;top: 20px;position: absolute;";
    main.appendChild(viewButton5);

    let inviewBtn5 = document.createElement('a');
    inviewBtn5.innerText = "Sign Up ";
    inviewBtn5.style = "height: 30px;cursor: pointer;display: inline-block;position: relative;color: black;text-align: center;font-size: 16px;width: 100px;cursor: pointer;"
    viewButton5.appendChild(inviewBtn5);
    inviewBtn5.addEventListener('click', services4);
    
     function services4(link){
        let x = document.createElement('a');
        x.link = '/sign.html';
        window.open(x.link);
    }
    
   
        //text
        let text = document.createElement('div');
        text.style="background-color: black;opacity: 0.5;border: 2px solid black;margin: auto;padding: 15px;width: 35%;border-radius: 28px;text-align: center;margin-top: 220px;position: relative;";
        main.appendChild(text);

        let word= document.createElement('a');
        word.innerText="Paying Guest Stays\n";
        word.style="text-align: center;color: white;text-decoration: none;font-weight:bold;font-size:30px;";
        text.appendChild(word);

        let word1= document.createElement('a');
        word1.innerText="In Affordable Prices\n\n";
        word1.style="text-align: center;color: white;text-decoration: none;font-weight:bold;font-size:23px;";
        text.appendChild(word1);

        let viewButton3 = document.createElement('div');
    viewButton3.style = "  text-align: center;display:flex;margin-left:35%;opacity: 0.5;"
    text.appendChild(viewButton3);

    let inviewBtn3 = document.createElement('button');
    inviewBtn3.innerText = "Book Now";
    inviewBtn3.style = "background-color: black;border: 2px solid white ;border-radius:100px;height: 40px;cursor: pointer;position: relative;color: white;font-size: 16px;width: 150px;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);"
    viewButton3.appendChild(inviewBtn3);
    inviewBtn3.addEventListener('click', services2);
    
     function services2(link){
        let x = document.createElement('a');
        x.link = '/book.html';
        window.open(x.link);
    }

        



        //rooms and services
        let rooms = document.createElement('div');
        rooms.style='height: 1000px; width:1440px;  position: relative; background-color:white;';
        document.body.appendChild(rooms);

        //rooms block
        let room_block = document.createElement('div');
        room_block.style = 'height: 500px';
        rooms.appendChild(room_block);
        
        
        //word

        let room1 = document.createElement('div');
        room1.style = "display:flex; margin-top:50px;";
        room_block.appendChild(room1);

        let room_word = document.createElement('string');
        room_word.innerText="Rooms\n";
        room_word.style = 'font-family: cursive; font-size: 35px; font-weight: bold; margin-left: 670px; color: black; ';
        room1.appendChild(room_word);

    //     let viewButton1 = document.createElement('div');
    // viewButton1.style = "  text-align: center;display:flex;margin-left:35%;"
    // room1.appendChild(viewButton1);

    // let inviewBtn1 = document.createElement('button');
    // inviewBtn1.innerText = "View All";
    // inviewBtn1.style = "height: 30px;cursor: pointer;display: inline-block;position: relative;transition: 0.5s;border-radius: 4px;background-color: #8a6636;border: none;color: #fff;text-align: center;font-size: 12px;padding: 10px;width: 80px;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);"
    // viewButton1.appendChild(inviewBtn1);
    // inviewBtn1.addEventListener('click', services1);
    
    //  function services1(link){
    //     let x = document.createElement('a');
    //     x.link = '/gallery.html';
    //     window.open(x.link);
    // }

        //room photo
        let r_photo = document.createElement('div');
        room_block.appendChild(r_photo);

        let r1 = document.createElement('img');
        r1.src="photo/single.jpeg";
        r1.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        r_photo.appendChild(r1);


        let r2 = document.createElement('img');
        r2.src="photo/double.jpg";
        r2.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        r_photo.appendChild(r2);

        let r3 = document.createElement('img');
        r3.src="photo/triple.jpg";
        r3.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        r_photo.appendChild(r3);

        let r4 = document.createElement('img');
        r4.src="photo/quad.jpeg";
        r4.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        r_photo.appendChild(r4);

        let doc = document.createElement('div');
        doc.style = "position:relative;display: flex;justify-content: space-evenly;margin:-90px;padding: 30px;width: 100%;margin-top:-50px; font-size:18px;margin-left: -5.2%;";
        r_photo.appendChild(doc);

        let w1 = document.createElement('a');
        w1.innerText = " \nSingle sharing\t";
        doc.appendChild(w1);

        let w2 = document.createElement('a');
        w2.innerText = " \nDouble sharing";
        doc.appendChild(w2);

        let w3 = document.createElement('a');
        w3.innerText = " \nTriple sharing";
        doc.appendChild(w3);

        let w4 = document.createElement('a');
        w4.innerText = " \nQuad sharing";
        doc.appendChild(w4);

        //services
        let service_block = document.createElement('div');
        service_block.style = 'height: 450px;';
        rooms.appendChild(service_block);

        // word
        let service1 = document.createElement('div');
        service1.style = "display:flex;";
        service_block.appendChild(service1);

        let service_word = document.createElement('string');
        service_word.innerText="Services";
        service_word.style = 'font-family: cursive; font-size: 35px; font-weight: bold; margin-left: 670px; color: black;display:flex;';
        service1.appendChild(service_word);


    //     let viewButton = document.createElement('div');
    // viewButton.style = "  text-align: center;display:flex;margin-left:35%;"
    // service1.appendChild(viewButton);

    // let inviewBtn = document.createElement('button');
    // inviewBtn.innerText = "View All";
    // inviewBtn.style = "height: 30px;cursor: pointer;display: inline-block;position: relative;transition: 0.5s;border-radius: 4px;background-color: #8a6636;border: none;color: #fff;text-align: center;font-size: 12px;padding: 10px;width: 80px;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);"
    // viewButton.appendChild(inviewBtn);
    // inviewBtn.addEventListener('click', services);
    
    //  function services(link){
    //     let x = document.createElement('a');
    //     x.link = '/services.html';
    //     window.open(x.link);
    // }

   
 


        //picture 
        let s_photo = document.createElement('div');
        service_block.appendChild(s_photo);

        let s1 = document.createElement('img');
        s1.src="photo/store.jpg";
        s1.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        s_photo.appendChild(s1);

        let s2 = document.createElement('img');
        s2.src="photo/kitch.jpg";
        s2.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        s_photo.appendChild(s2);

        let s3 = document.createElement('img');
        s3.src="photo/shower.jpg";
        s3.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        s_photo.appendChild(s3);

        let s4 = document.createElement('img');
        s4.src="photo/ward.jpg";
        s4.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        s_photo.appendChild(s4);

        let doc1 = document.createElement('div');
        doc1.style = "position:relative;display: flex;justify-content: space-evenly;margin:-90px;padding: 30px;width: 100%;margin-top:-50px; font-size:18px;margin-left: -5.2%;";
        s_photo.appendChild(doc1);

        let w11 = document.createElement('a');
        w11.innerText = " \nGrocery Store\t";
        doc1.appendChild(w11);

        let w22 = document.createElement('a');
        w22.innerText = " \nKitchen";
        doc1.appendChild(w22);

        let w33 = document.createElement('a');
        w33.innerText = " \nShower";
        doc1.appendChild(w33);

        let w44 = document.createElement('a');
        w44.innerText = " \nWardrobe";
        doc1.appendChild(w44);



      //button

        let viewButton = document.createElement('div');
    viewButton.style = "  text-align: center;display:flex;margin-left:47%;margin-top:90px;"
    s_photo.appendChild(viewButton);

    let inviewBtn = document.createElement('button');
    inviewBtn.innerText = "View All";
    inviewBtn.style = "height: 30px;cursor: pointer;display: inline-block;position: relative;transition: 0.5s;border-radius: 4px;background-color: #8a6636;border: none;color: #fff;text-align: center;font-size: 12px;padding: 10px;width: 80px;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);"
    viewButton.appendChild(inviewBtn);
    inviewBtn.addEventListener('click', services);
    
     function services(link){
        let x = document.createElement('a');
        x.link = '/services.html';
        window.open(x.link);
    }


        //about us
        let about = document.createElement('div');
        about.style='height: 900px; width:1440px; background-color:white; position: relative;';
        document.body.appendChild(about);

        //photo
        let about_photo = document.createElement('img');
        about_photo.src="photo/ab.jpg";
        about_photo.style="position: absolute; width: 50%; height: 800px; margin-left: 5%; margin-top: 5%; border-radius: 20px;background-color: white;";
        about.appendChild(about_photo);

        //about us matter div
        let about_right = document.createElement('div');
        about_right.style = "position: absolute;margin-top:18% ;margin-left: 60%;width:35%;font-size: 35px; line-height:25px;";
        about.appendChild(about_right);

        //about word
        let about_word = document.createElement('string');
        about_word.innerText="About Us\n";
        about_word.style= "font-family: cursive; font-size: 35px; margin-left: 25%; font-weight: bold; margin-top: 67px; color: black;";
        about_right.appendChild(about_word);

        //about matter
        let about_right1 = document.createElement('div');
        about_right1.style = "position: absolute;margin-top:23% ;margin-left: 60%;width:35%;font-size: 35px; line-height:25px;";
        about.appendChild(about_right1);

        let matter = document.createElement('para');
        matter.innerText="Our paying guest website, EasyPG at Dharuhera, signifies warmth and friendliness, simplicity, style, convenience and affordability. Our Pg site is an exemplary showcase of elegance in its ambiance, distinguished by the latest technology, modern amenities. We provide you with a comfortable experience beyond all expectations. EasyPG is a technology-based platform for Booking PG, Serviced Apartments, Shared Flat and Rooms by Location with Specific requirement by filtering by Location, IT Parks, Land Mark, Price, Room type, Amenities, Gender and Food. Presently we have Launched in Platform in Chennai, Coimbatore and Bangalore. We will soon expand to all the Major Cities of the Country.";
        matter.style="font-size:20px; position:relative; width:50%; "
        about_right1.appendChild(matter);

        let viewButton16 = document.createElement('div');
        viewButton16.style = "  text-align: center;display:flex;margin-left:35%;"
        about_right1.appendChild(viewButton16);

        let inviewBtn16 = document.createElement('button');
        inviewBtn16.innerText = "View More";
        inviewBtn16.style = "height: 30px;cursor: pointer;display: inline-block;position: relative;transition: 0.5s;border-radius: 4px;background-color: #8a6636;border: none;color: #fff;text-align: center;font-size: 12px;padding: 10px;width: 80px;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);"
        viewButton16.appendChild(inviewBtn16);
        inviewBtn16.addEventListener('click', services16);
        
        function services16(link){
            let x = document.createElement('a');
            x.link = '/about.html';
            window.open(x.link);
        }

        //gallery
        let gallery = document.createElement('div');
        gallery.style='height: 450px; width:1440px; background-color:white; position: relative;';
        document.body.appendChild(gallery);
        //word

        

        let gallery_word= document.createElement('a');
        gallery_word.innerText ="Gallery";
        gallery_word.style = 'font-family: cursive;margin-left:690px ;font-size: 35px; font-weight: bold;  color: black;';
        gallery.appendChild(gallery_word);

// // let galler = document.createElement('div');
//         // galler.style = "display:flex;margin-top: 30px;";
//         // gallery.appendChild(galler);
//         let viewButton2 = document.createElement('div');
//     viewButton2.style = "  text-align: center;display:flex;margin-left:35%;"
//     galler.appendChild(viewButton2);

//     let inviewBtn2 = document.createElement('button');
//     inviewBtn2.innerText = "View All";
//     inviewBtn2.style = "height: 30px;cursor: pointer;display: inline-block;position: relative;transition: 0.5s;border-radius: 4px;background-color: #8a6636;border: none;color: #fff;text-align: center;font-size: 12px;padding: 10px;width: 80px;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);"
//     viewButton2.appendChild(inviewBtn2);
//     inviewBtn2.addEventListener('click', services1);
    
//      function services1(link){
//         let x = document.createElement('a');
//         x.link = '/gallery.html';
//         window.open(x.link);
//     }

        //word
        let gallery_img = document.createElement('div');
        gallery_img.style="display:flex;justify-content:space-evenly;margin:auto;padding: 30px;width: 80% ";
        gallery.appendChild(gallery_img);

        let g1 = document.createElement('img');
        g1.src="photo/hostel22.jpeg";
        g1.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        gallery_img.appendChild(g1);

        let g2 = document.createElement('img');
        g2.src="photo/hostel23.jpeg";
        g2.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        gallery_img.appendChild(g2);

        let g3 = document.createElement('img');
        g3.src="photo/hostel 24.jpg";
        g3.style = "margin: 10px; padding: 15px; height: 300px; width: 300px; position: relative; border-radius: 30px; ";
        gallery_img.appendChild(g3);


        let galler = document.createElement('div');
        galler.style = "display:flex;margin-top: 150px;";
        gallery_img.appendChild(galler);

        let viewButton2 = document.createElement('div');
    viewButton2.style = "  text-align: center;display:flex;margin-left:35%;"
    galler.appendChild(viewButton2);

    let inviewBtn2 = document.createElement('button');
    inviewBtn2.innerText = ">";
    inviewBtn2.style = "height: 60px;cursor: pointer;display: inline-block;position: relative;border-radius: 4000px;background-color: #8a6636;color: #fff;font-size: 20px;padding: 10px;width: 60px;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .7);"
    viewButton2.appendChild(inviewBtn2);
    inviewBtn2.addEventListener('click', services1);
    
     function services1(link){
        let x = document.createElement('a');
        x.link = '/gallery2.html';
        window.open(x.link);
    }

        //contact us
        let contact = document.createElement('div');
        contact.style='height: 730px; width:1440px; background-color:white; position: relative;';
        document.body.appendChild(contact);
        
        let word_contact = document.createElement('a');
        word_contact.innerText = "Contact Us";
        word_contact.style='font-family: cursive; font-size: 35px; font-weight: bold; margin-left: 670px; color: black;';
        contact.appendChild(word_contact);

        let contact1 = document.createElement('div')
        contact1.style="display:flex;margin-top:5%";
        contact.appendChild(contact1);
        //left side
        let left_img = document.createElement('div');
        contact1.appendChild(left_img);

        // let img2 = document.createElement('p');
        // img2.src = "<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.670608445326!2d76.81143821492888!3d28.247675782571285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d478e1d59b7fb%3A0xb1787ccb5563c223!2sBML%20Munjal%20University%20(BMU)!5e0!3m2!1sen!2sin!4v1669874490713!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>";
        // left_img.appendChild(img2);
        let img2 = document.createElement('img');
        img2.src="photo/maps.jpg";
        img2.style="height:500px;width:500px; margin-right:20%;margin-left:35%;margin-top:6%;border-radius:20px;";
        left_img.appendChild(img2);

        //right side
        let right_img = document.createElement('div');
        right_img.style="margin-left:500px;text-align: center;margin-top:6%;";
        contact1.appendChild(right_img); 

        let img3 = document.createElement('img');
        img3.src="photo/m.png";
        img3.style="height:40px;width:40px;";
        right_img.appendChild(img3);

        let text1= document.createElement('a');
        text1.innerText="\n\nAddress:\nSahara PG, NH 48\n\n\n";
        right_img.appendChild(text1);

        let img4 = document.createElement('img');
        img4.src="photo/m.png";
        img4.style="height:40px;width:40px;";
        right_img.appendChild(img4);

        let text2= document.createElement('a');
        text2.innerText="\n\nEmail:\neasypg@gmail.com\nsupport@easypg.com\n\n\n";
        right_img.appendChild(text2);

        let img5 = document.createElement('img');
        img5.src="photo/m.png";
        img5.style="height:40px;width:40px;";
        right_img.appendChild(img5);

        let text3= document.createElement('a');
        text3.innerText="\n\nCall Us:\n+91 1(213)989453\n";
        right_img.appendChild(text3);
