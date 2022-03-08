export default function Banner() {
    return (
        <div class="hero">
            <section class="hero-content">
                <h2 class="sr-only">Promoted Content</h2>
                <p class="subtitle">No fees.</p>
                <p class="subtitle">No minimum deposit.</p>
                <p class="subtitle">High interest rates.</p>
                <p class="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
        
    )
}

// mettre l'image de bannière dans le fichier CSS ->  background-image: url('../img/bank-tree.jpeg');
// A METRE DANS LE FICHIER CSS et ne pas oublier la partie responsive
// .hero {
//     background-image: url('../img/bank-tree.jpeg');
//     background-position: 0 -50px;
//     background-size: cover;
//     background-repeat: no-repeat;
//     height: 300px;
//     position: relative;
//   }
  
//   .hero-content {
//     position: relative;
//     top: 2rem;
//     width: 200px;
//     background: white;
//     padding: 2rem;
//     text-align: left;
//     margin: 0 auto;
//   }
  
//   .hero-content .subtitle {
//     font-weight: bold;
//     font-size: 1rem;
//     margin: 0;
//   }
  
//   .hero-content .text {
//     margin-bottom: 0;
//     font-size: 0.9rem;
//   }