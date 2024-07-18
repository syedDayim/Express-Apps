import express from "express";
import { join } from 'path';
const index = (req, res) => {
    res.sendFile(join(process.cwd(), "views", "index.html"));
}
const about = (req, res) => {
    res.sendFile(join(process.cwd(), 'views', 'about.html'));
}
export { index, about }
