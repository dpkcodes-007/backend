import React, { useEffect, useRef } from 'react'

const Scroll = () => {
    const home = useRef()
    const abt = useRef()
    const process = useRef()
    const scroll  = useRef()

    const homeref = useRef()
    const abtref = useRef()
    const processref = useRef()
    const scrollref = useRef()


 
    
    

    const handleclick = ()=>{
      homeref.current.scrollIntoView({
        behaviour:"smooth"
      })
    }

        const abtclick = ()=>{
      abtref.current.scrollIntoView({
        behaviour:"smooth"
      })
    }

        const proclick = ()=>{
      processref.current.scrollIntoView({
        behaviour:"smooth"
      })
    }

        const scrollclick = ()=>{
      scrollref.current.scrollIntoView({
        behaviour:"smooth"
      })
    }
    const top = ()=>{
       
        window.scrollTo({   
            top:0,
            behavior:"smooth"
        })
    
    }


    return (

    <>
    <div>
        <div>
            <button ref={home} onClick={handleclick}>HOME</button>
            <button ref={abt} onClick={abtclick}>ABOUT</button>
            <button ref={process} onClick={proclick}>PROCESS</button>
            <button ref={scroll} onClick={scrollclick}>SCROLL</button>
        </div>
        <div>
            <section ref={homeref}>
               <h1>Home</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa est accusamus labore saepe tempore vel? Tempora, ipsam dolores? Ut obcaecati quidem minima repudiandae excepturi unde tenetur iure aliquam rem ad.
               Porro placeat impedit repellendus, dolores animi distinctio, facere nulla magni laudantium repudiandae quis veniam dolorem architecto illo quos quia quo suscipit, sit ab numquam cumque fugit. Aut ab tenetur dolorem?
               Voluptatum eum aspernatur velit error impedit. Nisi dolores nesciunt saepe qui assumenda natus hic, fugiat numquam iste quaerat quibusdam nulla? Iusto itaque vero natus. Nisi odit voluptate doloremque culpa distinctio!
               Magnam temporibus repellat earum nisi, distinctio aperiam! Tempore voluptatum dolor repudiandae eum laborum ipsa, eligendi quasi perferendis consequatur dignissimos quaerat, exercitationem rerum iure, quae minus quibusdam eius reiciendis aut maiores?
               Enim, consequatur? Ipsam, obcaecati qui. Eum doloribus officia similique adipisci odio maxime placeat, ullam voluptatum sint ipsam perferendis, nam exercitationem fugit a cum modi, amet sapiente ratione optio deserunt quaerat!
               Rerum adipisci dolor dolore quaerat dolorum! Ea provident culpa ullam maiores quia repellat recusandae, sequi illum at vero autem. Reiciendis aut nisi doloremque assumenda dicta at tempora consectetur atque ex.
               Aperiam, corrupti? Voluptas laboriosam quae qui neque exercitationem! Ducimus iure esse suscipit dignissimos laboriosam adipisci enim incidunt deleniti in, nobis rerum vitae molestiae iste. Repellat vel dolorem doloremque temporibus minus.
               Et odio tempore tenetur? Vero ratione excepturi deserunt! Quae suscipit odio, ratione reprehenderit ex itaque modi sunt aspernatur sit. In commodi voluptatem optio ducimus veritatis illum tempora quidem ullam iste?
               Quas nesciunt dicta facilis iusto dolores dignissimos veniam illo autem unde! Explicabo, iste possimus. Beatae debitis repudiandae quia, eveniet iure quos repellendus cumque eum temporibus quidem, qui maiores sapiente reiciendis!
               Maxime omnis, labore iste doloremque provident molestiae ad voluptatem quam ullam, cumque repellat eius deserunt! Assumenda repellendus nostrum, nisi similique temporibus fugiat delectus! Ad iusto veritatis atque, possimus cupiditate nam!
               Recusandae dolor odit sapiente, sit soluta officiis at aperiam libero, ex ipsa et. Nisi eveniet assumenda quia magni accusamus aliquid et, rem quas expedita omnis quo modi labore nobis inventore!
               Impedit consequatur aperiam quibusdam recusandae, incidunt quas tempore provident suscipit ea magnam similique optio nemo blanditiis quasi consectetur cumque! Doloremque mollitia perferendis commodi quidem voluptates cum blanditiis, sit sint quaerat.
               Laudantium quo magni inventore vero sint ducimus, rem, ab error eveniet officia dignissimos aut nam, quaerat illum? Labore, error veniam voluptates dolor ducimus iusto molestias expedita, cupiditate in id mollitia.
               Ullam assumenda doloremque voluptate molestias deleniti? Ullam debitis, accusamus dolores sed voluptatem quisquam asperiores veniam libero ut nulla, modi quod amet dolore enim, voluptate in perferendis ad esse earum quos.
               Obcaecati, nobis alias. Facilis nostrum repudiandae a corporis in. Fugiat aperiam quod cupiditate, facere omnis sed aspernatur debitis iure facilis alias. Animi doloribus unde aut nobis atque totam doloremque sunt!
               Atque repellat natus earum dolores, accusamus tenetur ipsum voluptatum eligendi qui doloribus nesciunt nihil, ipsa consequatur aperiam maiores, voluptate autem? Excepturi ut sed ipsum! Quis eaque commodi sapiente recusandae possimus!
               Sapiente nulla harum deserunt, veritatis vel iure non aspernatur. Eaque repellendus commodi ipsum, amet architecto est? Veniam adipisci consectetur pariatur, quae earum veritatis incidunt! Optio atque facilis qui et. Sint.
               Illo unde officiis magnam minima nam nihil, nemo exercitationem cumque quisquam repudiandae reprehenderit ad sequi vel debitis nobis, explicabo dolorum eius neque modi laborum! Rem molestias quod corporis necessitatibus vitae!
               Magni sequi, ullam dicta non laboriosam odit labore, repellat, quos natus vitae ut. Maxime pariatur consequatur asperiores molestiae temporibus delectus corrupti voluptatum exercitationem est, magnam ducimus eius. Quos, quia voluptatibus!
               Aperiam quaerat quas, atque suscipit architecto consequuntur fuga corporis excepturi quibusdam. Similique corporis facere, laboriosam consequatur possimus vitae fugit, excepturi qui eos tempora error numquam nisi veritatis laborum, doloribus saepe.
               Placeat tenetur, error modi doloremque repellat aliquam incidunt eum officiis quisquam dolore laboriosam esse expedita nesciunt odio temporibus nemo libero distinctio! Expedita velit fuga recusandae exercitationem? Consequatur fugiat consequuntur ad?
               Totam impedit laborum debitis expedita quas, corporis voluptatum minima repudiandae non illum rem sapiente eius voluptatibus ullam hic possimus accusamus neque soluta, magni quam dolorem. Ratione culpa ipsam itaque reiciendis!
               Assumenda ullam non sit! Unde eligendi omnis reprehenderit incidunt ducimus nisi. Quas laborum tempore nemo veritatis recusandae alias incidunt aliquid, nesciunt explicabo, necessitatibus soluta accusamus! Eos beatae sint perferendis dolore?
               Illo quidem tempora eveniet aliquid recusandae itaque sapiente, sunt, iste soluta praesentium quisquam cum quos omnis placeat architecto at beatae! Omnis ea eveniet hic officia nam harum reprehenderit cum accusantium?
               Dignissimos eum explicabo nam dolore debitis, consequuntur, nemo aspernatur iure doloribus quia quo? Asperiores itaque quod quos, laboriosam facilis ipsum hic eaque totam eius ullam delectus debitis, velit quidem perspiciatis!
               Exercitationem eum mollitia doloremque dicta quisquam fugiat id iure, natus asperiores, officia harum ipsum ipsam animi expedita blanditiis ab repellat incidunt facere doloribus maiores corrupti? Cupiditate fuga nesciunt dolore odio!
               Praesentium facere aut deserunt modi laudantium repellat vero voluptates fuga tempora placeat nisi laborum pariatur quos, facilis incidunt odit dignissimos commodi dolorem maxime autem a dolore quae! Accusantium, odit harum.
               Aliquid quis culpa deleniti nostrum autem nisi sequi error, adipisci assumenda illum dolorum at unde sapiente, maxime ab nihil accusamus! Incidunt, iure modi ipsum dicta quo repellendus alias officiis odio!
               Deleniti ipsa molestias consequuntur perferendis at quisquam. Vero, quas ratione possimus iure enim iusto, culpa rerum perferendis officia, maiores cupiditate praesentium voluptatum reprehenderit? Quam ipsa molestiae nihil adipisci ad facere!
               Ut necessitatibus magnam quia, eaque temporibus nostrum obcaecati adipisci modi inventore quis veritatis quos omnis eos natus, dolores totam beatae architecto. Consequatur nemo quae explicabo commodi, placeat eos rem quam?</p>
            </section>

            <section ref={abtref}>
               <h1>ABIUT</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa est accusamus labore saepe tempore vel? Tempora, ipsam dolores? Ut obcaecati quidem minima repudiandae excepturi unde tenetur iure aliquam rem ad.
               Porro placeat impedit repellendus, dolores animi distinctio, facere nulla magni laudantium repudiandae quis veniam dolorem architecto illo quos quia quo suscipit, sit ab numquam cumque fugit. Aut ab tenetur dolorem?
               Voluptatum eum aspernatur velit error impedit. Nisi dolores nesciunt saepe qui assumenda natus hic, fugiat numquam iste quaerat quibusdam nulla? Iusto itaque vero natus. Nisi odit voluptate doloremque culpa distinctio!
               Magnam temporibus repellat earum nisi, distinctio aperiam! Tempore voluptatum dolor repudiandae eum laborum ipsa, eligendi quasi perferendis consequatur dignissimos quaerat, exercitationem rerum iure, quae minus quibusdam eius reiciendis aut maiores?
               Enim, consequatur? Ipsam, obcaecati qui. Eum doloribus officia similique adipisci odio maxime placeat, ullam voluptatum sint ipsam perferendis, nam exercitationem fugit a cum modi, amet sapiente ratione optio deserunt quaerat!
               Rerum adipisci dolor dolore quaerat dolorum! Ea provident culpa ullam maiores quia repellat recusandae, sequi illum at vero autem. Reiciendis aut nisi doloremque assumenda dicta at tempora consectetur atque ex.
               Aperiam, corrupti? Voluptas laboriosam quae qui neque exercitationem! Ducimus iure esse suscipit dignissimos laboriosam adipisci enim incidunt deleniti in, nobis rerum vitae molestiae iste. Repellat vel dolorem doloremque temporibus minus.
               Et odio tempore tenetur? Vero ratione excepturi deserunt! Quae suscipit odio, ratione reprehenderit ex itaque modi sunt aspernatur sit. In commodi voluptatem optio ducimus veritatis illum tempora quidem ullam iste?
               Quas nesciunt dicta facilis iusto dolores dignissimos veniam illo autem unde! Explicabo, iste possimus. Beatae debitis repudiandae quia, eveniet iure quos repellendus cumque eum temporibus quidem, qui maiores sapiente reiciendis!
               Maxime omnis, labore iste doloremque provident molestiae ad voluptatem quam ullam, cumque repellat eius deserunt! Assumenda repellendus nostrum, nisi similique temporibus fugiat delectus! Ad iusto veritatis atque, possimus cupiditate nam!
               Recusandae dolor odit sapiente, sit soluta officiis at aperiam libero, ex ipsa et. Nisi eveniet assumenda quia magni accusamus aliquid et, rem quas expedita omnis quo modi labore nobis inventore!
               Impedit consequatur aperiam quibusdam recusandae, incidunt quas tempore provident suscipit ea magnam similique optio nemo blanditiis quasi consectetur cumque! Doloremque mollitia perferendis commodi quidem voluptates cum blanditiis, sit sint quaerat.
               Laudantium quo magni inventore vero sint ducimus, rem, ab error eveniet officia dignissimos aut nam, quaerat illum? Labore, error veniam voluptates dolor ducimus iusto molestias expedita, cupiditate in id mollitia.
               Ullam assumenda doloremque voluptate molestias deleniti? Ullam debitis, accusamus dolores sed voluptatem quisquam asperiores veniam libero ut nulla, modi quod amet dolore enim, voluptate in perferendis ad esse earum quos.
               Obcaecati, nobis alias. Facilis nostrum repudiandae a corporis in. Fugiat aperiam quod cupiditate, facere omnis sed aspernatur debitis iure facilis alias. Animi doloribus unde aut nobis atque totam doloremque sunt!
               Atque repellat natus earum dolores, accusamus tenetur ipsum voluptatum eligendi qui doloribus nesciunt nihil, ipsa consequatur aperiam maiores, voluptate autem? Excepturi ut sed ipsum! Quis eaque commodi sapiente recusandae possimus!
               Sapiente nulla harum deserunt, veritatis vel iure non aspernatur. Eaque repellendus commodi ipsum, amet architecto est? Veniam adipisci consectetur pariatur, quae earum veritatis incidunt! Optio atque facilis qui et. Sint.
               Illo unde officiis magnam minima nam nihil, nemo exercitationem cumque quisquam repudiandae reprehenderit ad sequi vel debitis nobis, explicabo dolorum eius neque modi laborum! Rem molestias quod corporis necessitatibus vitae!
               Magni sequi, ullam dicta non laboriosam odit labore, repellat, quos natus vitae ut. Maxime pariatur consequatur asperiores molestiae temporibus delectus corrupti voluptatum exercitationem est, magnam ducimus eius. Quos, quia voluptatibus!
               Aperiam quaerat quas, atque suscipit architecto consequuntur fuga corporis excepturi quibusdam. Similique corporis facere, laboriosam consequatur possimus vitae fugit, excepturi qui eos tempora error numquam nisi veritatis laborum, doloribus saepe.
               Placeat tenetur, error modi doloremque repellat aliquam incidunt eum officiis quisquam dolore laboriosam esse expedita nesciunt odio temporibus nemo libero distinctio! Expedita velit fuga recusandae exercitationem? Consequatur fugiat consequuntur ad?
               Totam impedit laborum debitis expedita quas, corporis voluptatum minima repudiandae non illum rem sapiente eius voluptatibus ullam hic possimus accusamus neque soluta, magni quam dolorem. Ratione culpa ipsam itaque reiciendis!
               Assumenda ullam non sit! Unde eligendi omnis reprehenderit incidunt ducimus nisi. Quas laborum tempore nemo veritatis recusandae alias incidunt aliquid, nesciunt explicabo, necessitatibus soluta accusamus! Eos beatae sint perferendis dolore?
               Illo quidem tempora eveniet aliquid recusandae itaque sapiente, sunt, iste soluta praesentium quisquam cum quos omnis placeat architecto at beatae! Omnis ea eveniet hic officia nam harum reprehenderit cum accusantium?
               Dignissimos eum explicabo nam dolore debitis, consequuntur, nemo aspernatur iure doloribus quia quo? Asperiores itaque quod quos, laboriosam facilis ipsum hic eaque totam eius ullam delectus debitis, velit quidem perspiciatis!
               Exercitationem eum mollitia doloremque dicta quisquam fugiat id iure, natus asperiores, officia harum ipsum ipsam animi expedita blanditiis ab repellat incidunt facere doloribus maiores corrupti? Cupiditate fuga nesciunt dolore odio!
               Praesentium facere aut deserunt modi laudantium repellat vero voluptates fuga tempora placeat nisi laborum pariatur quos, facilis incidunt odit dignissimos commodi dolorem maxime autem a dolore quae! Accusantium, odit harum.
               Aliquid quis culpa deleniti nostrum autem nisi sequi error, adipisci assumenda illum dolorum at unde sapiente, maxime ab nihil accusamus! Incidunt, iure modi ipsum dicta quo repellendus alias officiis odio!
               Deleniti ipsa molestias consequuntur perferendis at quisquam. Vero, quas ratione possimus iure enim iusto, culpa rerum perferendis officia, maiores cupiditate praesentium voluptatum reprehenderit? Quam ipsa molestiae nihil adipisci ad facere!
               Ut necessitatibus magnam quia, eaque temporibus nostrum obcaecati adipisci modi inventore quis veritatis quos omnis eos natus, dolores totam beatae architecto. Consequatur nemo quae explicabo commodi, placeat eos rem quam?</p>
            </section>

            <section ref={processref}>
               <h1>PROCESS</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa est accusamus labore saepe tempore vel? Tempora, ipsam dolores? Ut obcaecati quidem minima repudiandae excepturi unde tenetur iure aliquam rem ad.
               Porro placeat impedit repellendus, dolores animi distinctio, facere nulla magni laudantium repudiandae quis veniam dolorem architecto illo quos quia quo suscipit, sit ab numquam cumque fugit. Aut ab tenetur dolorem?
               Voluptatum eum aspernatur velit error impedit. Nisi dolores nesciunt saepe qui assumenda natus hic, fugiat numquam iste quaerat quibusdam nulla? Iusto itaque vero natus. Nisi odit voluptate doloremque culpa distinctio!
               Magnam temporibus repellat earum nisi, distinctio aperiam! Tempore voluptatum dolor repudiandae eum laborum ipsa, eligendi quasi perferendis consequatur dignissimos quaerat, exercitationem rerum iure, quae minus quibusdam eius reiciendis aut maiores?
               Enim, consequatur? Ipsam, obcaecati qui. Eum doloribus officia similique adipisci odio maxime placeat, ullam voluptatum sint ipsam perferendis, nam exercitationem fugit a cum modi, amet sapiente ratione optio deserunt quaerat!
               Rerum adipisci dolor dolore quaerat dolorum! Ea provident culpa ullam maiores quia repellat recusandae, sequi illum at vero autem. Reiciendis aut nisi doloremque assumenda dicta at tempora consectetur atque ex.
               Aperiam, corrupti? Voluptas laboriosam quae qui neque exercitationem! Ducimus iure esse suscipit dignissimos laboriosam adipisci enim incidunt deleniti in, nobis rerum vitae molestiae iste. Repellat vel dolorem doloremque temporibus minus.
               Et odio tempore tenetur? Vero ratione excepturi deserunt! Quae suscipit odio, ratione reprehenderit ex itaque modi sunt aspernatur sit. In commodi voluptatem optio ducimus veritatis illum tempora quidem ullam iste?
               Quas nesciunt dicta facilis iusto dolores dignissimos veniam illo autem unde! Explicabo, iste possimus. Beatae debitis repudiandae quia, eveniet iure quos repellendus cumque eum temporibus quidem, qui maiores sapiente reiciendis!
               Maxime omnis, labore iste doloremque provident molestiae ad voluptatem quam ullam, cumque repellat eius deserunt! Assumenda repellendus nostrum, nisi similique temporibus fugiat delectus! Ad iusto veritatis atque, possimus cupiditate nam!
               Recusandae dolor odit sapiente, sit soluta officiis at aperiam libero, ex ipsa et. Nisi eveniet assumenda quia magni accusamus aliquid et, rem quas expedita omnis quo modi labore nobis inventore!
               Impedit consequatur aperiam quibusdam recusandae, incidunt quas tempore provident suscipit ea magnam similique optio nemo blanditiis quasi consectetur cumque! Doloremque mollitia perferendis commodi quidem voluptates cum blanditiis, sit sint quaerat.
               Laudantium quo magni inventore vero sint ducimus, rem, ab error eveniet officia dignissimos aut nam, quaerat illum? Labore, error veniam voluptates dolor ducimus iusto molestias expedita, cupiditate in id mollitia.
               Ullam assumenda doloremque voluptate molestias deleniti? Ullam debitis, accusamus dolores sed voluptatem quisquam asperiores veniam libero ut nulla, modi quod amet dolore enim, voluptate in perferendis ad esse earum quos.
               Obcaecati, nobis alias. Facilis nostrum repudiandae a corporis in. Fugiat aperiam quod cupiditate, facere omnis sed aspernatur debitis iure facilis alias. Animi doloribus unde aut nobis atque totam doloremque sunt!
               Atque repellat natus earum dolores, accusamus tenetur ipsum voluptatum eligendi qui doloribus nesciunt nihil, ipsa consequatur aperiam maiores, voluptate autem? Excepturi ut sed ipsum! Quis eaque commodi sapiente recusandae possimus!
               Sapiente nulla harum deserunt, veritatis vel iure non aspernatur. Eaque repellendus commodi ipsum, amet architecto est? Veniam adipisci consectetur pariatur, quae earum veritatis incidunt! Optio atque facilis qui et. Sint.
               Illo unde officiis magnam minima nam nihil, nemo exercitationem cumque quisquam repudiandae reprehenderit ad sequi vel debitis nobis, explicabo dolorum eius neque modi laborum! Rem molestias quod corporis necessitatibus vitae!
               Magni sequi, ullam dicta non laboriosam odit labore, repellat, quos natus vitae ut. Maxime pariatur consequatur asperiores molestiae temporibus delectus corrupti voluptatum exercitationem est, magnam ducimus eius. Quos, quia voluptatibus!
               Aperiam quaerat quas, atque suscipit architecto consequuntur fuga corporis excepturi quibusdam. Similique corporis facere, laboriosam consequatur possimus vitae fugit, excepturi qui eos tempora error numquam nisi veritatis laborum, doloribus saepe.
               Placeat tenetur, error modi doloremque repellat aliquam incidunt eum officiis quisquam dolore laboriosam esse expedita nesciunt odio temporibus nemo libero distinctio! Expedita velit fuga recusandae exercitationem? Consequatur fugiat consequuntur ad?
               Totam impedit laborum debitis expedita quas, corporis voluptatum minima repudiandae non illum rem sapiente eius voluptatibus ullam hic possimus accusamus neque soluta, magni quam dolorem. Ratione culpa ipsam itaque reiciendis!
               Assumenda ullam non sit! Unde eligendi omnis reprehenderit incidunt ducimus nisi. Quas laborum tempore nemo veritatis recusandae alias incidunt aliquid, nesciunt explicabo, necessitatibus soluta accusamus! Eos beatae sint perferendis dolore?
               Illo quidem tempora eveniet aliquid recusandae itaque sapiente, sunt, iste soluta praesentium quisquam cum quos omnis placeat architecto at beatae! Omnis ea eveniet hic officia nam harum reprehenderit cum accusantium?
               Dignissimos eum explicabo nam dolore debitis, consequuntur, nemo aspernatur iure doloribus quia quo? Asperiores itaque quod quos, laboriosam facilis ipsum hic eaque totam eius ullam delectus debitis, velit quidem perspiciatis!
               Exercitationem eum mollitia doloremque dicta quisquam fugiat id iure, natus asperiores, officia harum ipsum ipsam animi expedita blanditiis ab repellat incidunt facere doloribus maiores corrupti? Cupiditate fuga nesciunt dolore odio!
               Praesentium facere aut deserunt modi laudantium repellat vero voluptates fuga tempora placeat nisi laborum pariatur quos, facilis incidunt odit dignissimos commodi dolorem maxime autem a dolore quae! Accusantium, odit harum.
               Aliquid quis culpa deleniti nostrum autem nisi sequi error, adipisci assumenda illum dolorum at unde sapiente, maxime ab nihil accusamus! Incidunt, iure modi ipsum dicta quo repellendus alias officiis odio!
               Deleniti ipsa molestias consequuntur perferendis at quisquam. Vero, quas ratione possimus iure enim iusto, culpa rerum perferendis officia, maiores cupiditate praesentium voluptatum reprehenderit? Quam ipsa molestiae nihil adipisci ad facere!
               Ut necessitatibus magnam quia, eaque temporibus nostrum obcaecati adipisci modi inventore quis veritatis quos omnis eos natus, dolores totam beatae architecto. Consequatur nemo quae explicabo commodi, placeat eos rem quam?</p>
            </section>

                <section ref={scrollref}>
               <h1>SCROLL</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa est accusamus labore saepe tempore vel? Tempora, ipsam dolores? Ut obcaecati quidem minima repudiandae excepturi unde tenetur iure aliquam rem ad.
               Porro placeat impedit repellendus, dolores animi distinctio, facere nulla magni laudantium repudiandae quis veniam dolorem architecto illo quos quia quo suscipit, sit ab numquam cumque fugit. Aut ab tenetur dolorem?
               Voluptatum eum aspernatur velit error impedit. Nisi dolores nesciunt saepe qui assumenda natus hic, fugiat numquam iste quaerat quibusdam nulla? Iusto itaque vero natus. Nisi odit voluptate doloremque culpa distinctio!
               Magnam temporibus repellat earum nisi, distinctio aperiam! Tempore voluptatum dolor repudiandae eum laborum ipsa, eligendi quasi perferendis consequatur dignissimos quaerat, exercitationem rerum iure, quae minus quibusdam eius reiciendis aut maiores?
               Enim, consequatur? Ipsam, obcaecati qui. Eum doloribus officia similique adipisci odio maxime placeat, ullam voluptatum sint ipsam perferendis, nam exercitationem fugit a cum modi, amet sapiente ratione optio deserunt quaerat!
               Rerum adipisci dolor dolore quaerat dolorum! Ea provident culpa ullam maiores quia repellat recusandae, sequi illum at vero autem. Reiciendis aut nisi doloremque assumenda dicta at tempora consectetur atque ex.
               Aperiam, corrupti? Voluptas laboriosam quae qui neque exercitationem! Ducimus iure esse suscipit dignissimos laboriosam adipisci enim incidunt deleniti in, nobis rerum vitae molestiae iste. Repellat vel dolorem doloremque temporibus minus.
               Et odio tempore tenetur? Vero ratione excepturi deserunt! Quae suscipit odio, ratione reprehenderit ex itaque modi sunt aspernatur sit. In commodi voluptatem optio ducimus veritatis illum tempora quidem ullam iste?
               Quas nesciunt dicta facilis iusto dolores dignissimos veniam illo autem unde! Explicabo, iste possimus. Beatae debitis repudiandae quia, eveniet iure quos repellendus cumque eum temporibus quidem, qui maiores sapiente reiciendis!
               Maxime omnis, labore iste doloremque provident molestiae ad voluptatem quam ullam, cumque repellat eius deserunt! Assumenda repellendus nostrum, nisi similique temporibus fugiat delectus! Ad iusto veritatis atque, possimus cupiditate nam!
               Recusandae dolor odit sapiente, sit soluta officiis at aperiam libero, ex ipsa et. Nisi eveniet assumenda quia magni accusamus aliquid et, rem quas expedita omnis quo modi labore nobis inventore!
               Impedit consequatur aperiam quibusdam recusandae, incidunt quas tempore provident suscipit ea magnam similique optio nemo blanditiis quasi consectetur cumque! Doloremque mollitia perferendis commodi quidem voluptates cum blanditiis, sit sint quaerat.
               Laudantium quo magni inventore vero sint ducimus, rem, ab error eveniet officia dignissimos aut nam, quaerat illum? Labore, error veniam voluptates dolor ducimus iusto molestias expedita, cupiditate in id mollitia.
               Ullam assumenda doloremque voluptate molestias deleniti? Ullam debitis, accusamus dolores sed voluptatem quisquam asperiores veniam libero ut nulla, modi quod amet dolore enim, voluptate in perferendis ad esse earum quos.
               Obcaecati, nobis alias. Facilis nostrum repudiandae a corporis in. Fugiat aperiam quod cupiditate, facere omnis sed aspernatur debitis iure facilis alias. Animi doloribus unde aut nobis atque totam doloremque sunt!
               Atque repellat natus earum dolores, accusamus tenetur ipsum voluptatum eligendi qui doloribus nesciunt nihil, ipsa consequatur aperiam maiores, voluptate autem? Excepturi ut sed ipsum! Quis eaque commodi sapiente recusandae possimus!
               Sapiente nulla harum deserunt, veritatis vel iure non aspernatur. Eaque repellendus commodi ipsum, amet architecto est? Veniam adipisci consectetur pariatur, quae earum veritatis incidunt! Optio atque facilis qui et. Sint.
               Illo unde officiis magnam minima nam nihil, nemo exercitationem cumque quisquam repudiandae reprehenderit ad sequi vel debitis nobis, explicabo dolorum eius neque modi laborum! Rem molestias quod corporis necessitatibus vitae!
               Magni sequi, ullam dicta non laboriosam odit labore, repellat, quos natus vitae ut. Maxime pariatur consequatur asperiores molestiae temporibus delectus corrupti voluptatum exercitationem est, magnam ducimus eius. Quos, quia voluptatibus!
               Aperiam quaerat quas, atque suscipit architecto consequuntur fuga corporis excepturi quibusdam. Similique corporis facere, laboriosam consequatur possimus vitae fugit, excepturi qui eos tempora error numquam nisi veritatis laborum, doloribus saepe.
               Placeat tenetur, error modi doloremque repellat aliquam incidunt eum officiis quisquam dolore laboriosam esse expedita nesciunt odio temporibus nemo libero distinctio! Expedita velit fuga recusandae exercitationem? Consequatur fugiat consequuntur ad?
               Totam impedit laborum debitis expedita quas, corporis voluptatum minima repudiandae non illum rem sapiente eius voluptatibus ullam hic possimus accusamus neque soluta, magni quam dolorem. Ratione culpa ipsam itaque reiciendis!
               Assumenda ullam non sit! Unde eligendi omnis reprehenderit incidunt ducimus nisi. Quas laborum tempore nemo veritatis recusandae alias incidunt aliquid, nesciunt explicabo, necessitatibus soluta accusamus! Eos beatae sint perferendis dolore?
               Illo quidem tempora eveniet aliquid recusandae itaque sapiente, sunt, iste soluta praesentium quisquam cum quos omnis placeat architecto at beatae! Omnis ea eveniet hic officia nam harum reprehenderit cum accusantium?
               Dignissimos eum explicabo nam dolore debitis, consequuntur, nemo aspernatur iure doloribus quia quo? Asperiores itaque quod quos, laboriosam facilis ipsum hic eaque totam eius ullam delectus debitis, velit quidem perspiciatis!
               Exercitationem eum mollitia doloremque dicta quisquam fugiat id iure, natus asperiores, officia harum ipsum ipsam animi expedita blanditiis ab repellat incidunt facere doloribus maiores corrupti? Cupiditate fuga nesciunt dolore odio!
               Praesentium facere aut deserunt modi laudantium repellat vero voluptates fuga tempora placeat nisi laborum pariatur quos, facilis incidunt odit dignissimos commodi dolorem maxime autem a dolore quae! Accusantium, odit harum.
               Aliquid quis culpa deleniti nostrum autem nisi sequi error, adipisci assumenda illum dolorum at unde sapiente, maxime ab nihil accusamus! Incidunt, iure modi ipsum dicta quo repellendus alias officiis odio!
               Deleniti ipsa molestias consequuntur perferendis at quisquam. Vero, quas ratione possimus iure enim iusto, culpa rerum perferendis officia, maiores cupiditate praesentium voluptatum reprehenderit? Quam ipsa molestiae nihil adipisci ad facere!
               Ut necessitatibus magnam quia, eaque temporibus nostrum obcaecati adipisci modi inventore quis veritatis quos omnis eos natus, dolores totam beatae architecto. Consequatur nemo quae explicabo commodi, placeat eos rem quam?</p>
            </section>

    </div>
            <button onClick={top}  > MOVE TO TOP </button>
        </div>
    
    
    </>
  )
}

export default Scroll