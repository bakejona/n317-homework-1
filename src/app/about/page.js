"use client";
import homeStyles from "@/app/page.module.css";
export default function About() {
    return (
        <div>
          <nav style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#f0f0f0', padding: '1rem' }}>
            <a href="#" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>We Sell Nothing.</a>
            <a href="/about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Link 2</a>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Link 3</a>
          </nav>
          <main>
            <div class="about-main">
            <h1>About</h1>
            <p>We sell nothing</p>
            </div>
            
          </main>
        </div>
        );
}
