/* General Reset */
body, h1, h2, h3, p, a, input, textarea, button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
}

/* Header */
header {
    background-color: #007bff;
    color: white;
    padding: 1rem 0;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
}

header nav a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
}

header nav a:hover {
    text-decoration: underline;
}

/* Sections */
.section {
    padding: 2rem 1rem;
    text-align: center;
}

.section h2 {
    margin-bottom: 1rem;
    color: #007bff;
}

/* Skills */
.skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
}

.skill-card {
    background-color: white;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1 1 calc(30% - 1rem);
    max-width: calc(30% - 1rem);
}

.skill-list {
    flex: 1 1 100%;
    text-align: left;
}

.skill-list h3 {
    margin-bottom: 0.5rem;
    color: #007bff;
}

.skill-list p {
    margin: 0.25rem 0;
}

/* Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.project-card {
    background-color: white;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Contact Form */
#contact-form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

#contact-form input,
#contact-form textarea {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

#contact-form button {
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#contact-form button:hover {
    background-color: #0056b3;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 2rem 0;
    position: relative;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
}

footer a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;
}

footer a:hover {
    color: #ffd700;
}

footer p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
}
